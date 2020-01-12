import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../player.service';

@Component({
  selector: 'ssp-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  players: Player[];

  constructor(
    private readonly playerService: PlayerService,
  ) {}

  ngOnInit() {
    this.playerService
      .getPlayers()
      .subscribe(players => this.players = players);
  }
}
