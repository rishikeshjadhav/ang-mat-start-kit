import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Config } from '../models/config';
import { LoadConfigService } from './load-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private configs: Config;
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private configService: LoadConfigService) {
    this.configs = configService.AllConfigs as Config;
  }

  callback(url, data = null, httpRequest: string): Observable<any> {
    return this.getApiResponse(url, data, httpRequest);
  }

  private getApiResponse(url, data, httpRequest) {
    if (url.charAt(0) !== '/') {
      this.apiUrl = this.configs.APIURL + '/' + url;
    } else {
      this.apiUrl = this.configs.APIURL + url;
    }

    const httpOptions = {
      headers: null
    };
    if (httpOptions.headers == null) {
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }

    switch (httpRequest) {
      case 'post': {
        return this.http.post(this.apiUrl, data).pipe(
          catchError((err: HttpErrorResponse) => {
            return throwError('Error Message : ' + err);
          })
        );
        break;
      }
      case 'get': {
        return this.http.get<any[]>(this.apiUrl, httpOptions).pipe(
          catchError((err: HttpErrorResponse) => {
            return throwError('Error Message : ' + err);
          })
        );
        break;
      }
      case 'put': {
        return this.http.put(this.apiUrl, data, httpOptions).pipe(
          catchError((err: HttpErrorResponse) => {
            return throwError('Error Message : ' + err);
          })
        );
        break;
      }
      case 'delete': {
        return this.http.delete(this.apiUrl, httpOptions).pipe(
          catchError((err: HttpErrorResponse) => {
            return throwError('Error Message : ' + err);
          })
        );
        break;
      }
    }
  }

}
