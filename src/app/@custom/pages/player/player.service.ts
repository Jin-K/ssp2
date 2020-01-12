import { Injectable } from '@angular/core';
import { WordpressConnectorService, QueryBuilder } from '../../services/wordpress-connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store/src/models';

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
    const queryBuilder = new QueryBuilder();
    queryBuilder.addParam('status', 'any');
    queryBuilder.addParam('per_page', 5);

    return this.wordpressConnector
      .getProjects(queryBuilder)
      .pipe(
        map(projects =>
          projects.map(({title, status, date, author}) =>
            ({ title: title.rendered, status, date: new Date(date), authorId: author }),
          ),
        ),
      );
  }

  savePlayer(action: Action): Observable<object> {
    return this.wordpressConnector.saveProject(action);
  }
}
