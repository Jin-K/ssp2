import { Component, OnInit } from '@angular/core';
import { WordpressConnectorService } from '../../../@core/utils/wordpress-connector.service';
import { Project } from '../../../data/projects';

@Component({
  selector: 'ngx-form-player-list',
  templateUrl: './form-player-list.component.html',
  styleUrls: ['./form-player-list.component.scss'],
})
export class FormPlayerListComponent implements OnInit {

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
