import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../player.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { playerActions } from '../state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ssp-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit, OnDestroy {
  private readonly unsubscribeAll: Subject<void> = new Subject<void>();

  players: Player[];

  constructor(
    private readonly store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(playerActions.GetPlayers());

    this.store
      .select(state => state.player.items)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(players => this.players = players);
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
