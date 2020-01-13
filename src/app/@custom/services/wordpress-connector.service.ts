import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Project } from '../data/projects';
import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import { environment } from '../../../environments/environment';

@Injectable()
export class WordpressConnectorService {

  private readonly endpoint = `${environment.apiEndpoint}/wp-json/wp/v2`;

  constructor(private readonly http: HttpClient) {}

  getProjects(queryBuilder: QueryBuilder): Observable<Project[]> {
    queryBuilder.addParam('_embed');

    const path = queryBuilder.toString(`${this.endpoint}/project`);

    return this.http.get<Project[]>(path);
  }

  saveProject(action: Action): Observable<object> {
    return throwError({message: 'Not implemented !'});
  }
}

export class QueryBuilder {
  private readonly params: {[key: string]: any} = {};

  addParam(key: string, value?: any): void {
    this.params[key] = value;
  }

  toString(url?: string): string {
    const queryStringParts = _.map(this.params, (value, key) => value === undefined ? key : `${key}=${value}`);
    const queryString = _.join(queryStringParts, '&');
    return url === undefined
      ? queryString
      : `${url}?${queryString}`;
  }
}
