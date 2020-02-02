import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { playerActions, playerSelectors } from '../state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare interface PlayerVm {
  id: number;
  title: string;
  status: string;
  date: Date;
  authorId: number;
  category: string;
  image: string;
}

@Component({
  selector: 'ssp-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit, OnDestroy {
  private readonly unsubscribeAll: Subject<void> = new Subject<void>();

  players: PlayerVm[];

  constructor(
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(playerActions.GetPlayers());

    this.store
      .select(playerSelectors.players)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(playerDtos => {
        this.players = playerDtos
          .map(({date, category, image, ...playerDto}) => ({
            ...playerDto,
            category: category || 'No category',
            date: new Date(date),
            image,
          }));
      });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
