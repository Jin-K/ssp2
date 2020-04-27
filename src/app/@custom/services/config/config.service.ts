import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SspConfig } from './config.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SspConfigService {
  constructor(private readonly http: HttpClient) {}

  getConfig(): Promise<SspConfig> {
    const baseConfigPath = `./config/config.base.json`;
    const overridesConfigPath = `./config/config.overrides.json`;

    return forkJoin([
      this.http.get<SspConfig>(baseConfigPath),
      this.http.get<SspConfig>(overridesConfigPath),
    ])
    .pipe(
      map(([baseConfig, overridesConfig]) => ({ ...baseConfig, ...overridesConfig }) ),
    )
    .toPromise();
  }
}
