import { Injectable } from '@angular/core';
import { WordpressConnectorService, QueryBuilder } from '../../services/wordpress-connector.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store/src/models';
import { Project } from '../../data/projects';
import * as _ from 'lodash';

export declare interface Player {
  id: number;
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
    return projects.map(({id, title, status, date, author, _embedded }) => {
      const player = {
        id,
        title: title.rendered,
        status,
        date,
        authorId: author,
      } as Player;

      const term = _embedded['wp:term'];
      if (term !== undefined && term.length > 0) {
        const firstTerm = term[0];
        if (firstTerm !== undefined && firstTerm.length > 0) {
          const category = firstTerm[0].name;
          player.category = category;
        }
      }

      const featureMedia = _embedded['wp:featuredmedia'];
      if (featureMedia !== undefined && featureMedia.length > 0) {
        const mediaDetails = featureMedia[0].media_details;
        player.image = _.find(mediaDetails.sizes, ({width, height}) => width === 100 && height === 100).source_url;
      }

      return player;
    });
  }
}
