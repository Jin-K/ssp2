import { Component, OnInit } from '@angular/core';
import { WordpressConnectorService } from '../../../services/wordpress-connector.service';
import { Project } from '../../../data/projects';

@Component({
  selector: 'ssp-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  projects: Project[];

  constructor(
    private readonly wordpressConnector: WordpressConnectorService,
  ) { }

  ngOnInit() {
    this.wordpressConnector
      .getProjects()
      .subscribe(data => this.projects = data);
  }

}
