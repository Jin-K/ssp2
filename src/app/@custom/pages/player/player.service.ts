import { Injectable } from '@angular/core';
import { WordpressConnectorService, QueryBuilder } from '../../services/wordpress-connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store/src/models';
import { Project } from '../../data/projects';
import * as _ from 'lodash';

export declare interface Player {
  title: string;
  status: string;
  date: string;
  authorId: number;
  category?: string;
  image?: string;
}

@Injectable()
export class PlayerService {
  constructor(private readonly wordpressConnector: WordpressConnectorService) {}

  getPlayers(perPage: number = 10): Observable<Player[]> {
    const queryBuilder = new QueryBuilder();
    queryBuilder.addParam('status', 'any');
    queryBuilder.addParam('per_page', perPage);

    return this.wordpressConnector
      .getProjects(queryBuilder)
      .pipe(map(this.mapProjectsToPlayers));
  }

  savePlayer(action: Action): Observable<object> {
    return this.wordpressConnector.saveProject(action);
  }

  private mapProjectsToPlayers(projects: Project[]): Player[] {
    return projects.map(({title, status, date, author, _embedded }) => {
      const player = {
        title: title.rendered,
        status,
        date,
        authorId: author,
      };

      const featureMedia = _embedded['wp:featuredmedia'];
      if (featureMedia === undefined || featureMedia.length === 0) {
        return player;
      }

      const mediaDetails = featureMedia[0].media_details;
      const image = _.find(mediaDetails.sizes, ({width, height}) => width === 100 && height === 100).source_url;

      const term = _embedded['wp:term'];
      const category = term[0][0].name;

      return {
        ...player,
        category,
        image,
      };
    });
  }
}
