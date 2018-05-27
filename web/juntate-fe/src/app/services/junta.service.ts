import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Aggroupment as Junta } from '../models/aggroupment';

@Injectable()
export class JuntaService {
  private url = `http://45.56.107.112:3030/junta`;

  constructor(private http: HttpClient) { }

  public getJuntas(): Observable<Junta[]> {
    const url = this.url + '/findAll';

    return this.http.get<Junta[]>(url)
      .map(response => {
        return response;
      });
  }

}
