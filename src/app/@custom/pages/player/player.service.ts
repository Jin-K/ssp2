import { Injectable } from '@angular/core';
import { WordpressConnectorService } from '../../services/wordpress-connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export declare interface Player {
  title: string;
  status: string;
  date: Date;
  authorId: number;
}

@Injectable()
export class PlayerService {
  constructor(private readonly wordpressConnector: WordpressConnectorService) {}

  getPlayers(): Observable<Player[]> {
    return this.wordpressConnector
      .getProjects()
      .pipe(
        map(projects =>
          projects.map(({title, status, date, author}) =>
            ({ title: title.rendered, status, date: new Date(date), authorId: author }),
          ),
        ),
      );
  }
}
