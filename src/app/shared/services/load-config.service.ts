import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http/http';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class LoadConfigService {

  private httpClient: HttpClient;
  private configs: Config;

  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  get AllConfigs() {
    return this.configs ? this.configs : {};
  }

  public async loadAllConfigs(): Promise<any> {
    return this.httpClient.get('assets/configs.json')
      .pipe(settings => settings)
      .toPromise()
      .then(settings => {
        this.configs = settings as Config;
      });
  }

}
