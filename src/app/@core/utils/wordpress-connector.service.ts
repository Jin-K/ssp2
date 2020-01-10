import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Project } from '../../data/projects';
import { Action } from '@ngrx/store';

@Injectable()
export class WordpressConnectorService {
    saveProject(action: Action): Observable<object> {
      return throwError({message: 'Not implemented !'});
    }

  private readonly endpoint = 'https://sport-stat-pro.com/wp-json/wp/v2';

  constructor(private readonly http: HttpClient) {}

  getProjects(status: string = 'any'): Observable<Project[]> {
    const path = `${this.endpoint}/project?status=${status}`;

    return this.http.get<Project[]>(path);
  }
}
