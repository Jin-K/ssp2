import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface HttpOptions {
  body?: any;
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SspApiService {
  private _apiUrl: string = '';
  get apiUrl(): string {
    return this._apiUrl;
  }
  set apiUrl(value: string) {
    if (!/^https?:\/\//.test(value)) {
      throw new Error('Invalid api url. Must start with either http:// or https://.');
    }

    this._apiUrl = value.replace(/\/$/, '');
  }

  constructor(
    private readonly http: HttpClient,
  ) {}

  get<T>(
    url: string,
    context?: string,
    options?: HttpOptions,
    overrideDefaultErrorHandling?: boolean,
  ): Observable<T> {
    return this.request('GET', url, context, options, overrideDefaultErrorHandling);
  }

  post<T>(
    url: string,
    body?: any,
    context?: string,
    options?: HttpOptions,
    overrideDefaultErrorHandling?: boolean,
  ): Observable<T> {
    const newOptions = options || {};

    if (body) {
      newOptions.body = body;
    }

    if (!newOptions.responseType) {
      newOptions.responseType = 'text';
    }

    return this.request('POST', url, context, newOptions, overrideDefaultErrorHandling);
  }

  put<T>(
    url: string,
    body?: any,
    context?: string,
    options?: HttpOptions,
    overrideDefaultErrorHandling?: boolean,
  ): Observable<T> {
    const newOptions = options || {};

    if (body) {
      newOptions.body = body;
    }

    if (!newOptions.responseType) {
      newOptions.responseType = 'text';
    }

    return this.request('PUT', url, context, newOptions, overrideDefaultErrorHandling);
  }

  delete<T>(
    url: string,
    context?: string,
    options?: HttpOptions,
    overrideDefaultErrorHandling?: boolean,
  ): Observable<T> {
    const newOptions = options || {};

    if (!newOptions.responseType) {
      newOptions.responseType = 'text';
    }

    return this.request('DELETE', url, context, newOptions, overrideDefaultErrorHandling);
  }

  private request<T>(
    method: string,
    url: string,
    context?: string,
    options?: HttpOptions,
    overrideDefaultErrorHandling?: boolean,
  ): Observable<T> {
    const newOptions = options || {};
    newOptions.headers = newOptions.headers || new HttpHeaders();

    if (context) {
      newOptions.headers = newOptions.headers.append('context', context);
    }

    return this.http
      .request(method, this.buildUrl(url), newOptions)
      .pipe(
        catchError(error => {
          if (!overrideDefaultErrorHandling) this.handleError(error);
          return throwError(error);
        }),
      );
  }

  private buildUrl(url: string): string {
    return `${this.apiUrl}/${url.replace(/^\//, '')}`;
  }

  private handleError(error: Response): void {
    // TODO: finish error handling
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 400: break;
        case 401: break;
        case 403: break;
        case 404: break;
        case 405: break;
        case 500: break;
        case 501: break;
        case 502: break;
        case 503: break;
        case 504: break;
      }
    }
  }
}
