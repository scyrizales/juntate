import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Aggroupment } from '../models/aggroupment';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreateAggroupmentService {
  private url = `http://45.56.107.112:3030/junta/`;

  constructor(private http: HttpClient) { }

  public createAggroupment(aggroupment: Aggroupment, user: User): Observable<Aggroupment> {
    const createUrl = this.url + `create`;
    return this.http.post<Aggroupment>(createUrl, aggroupment.toSend(user.id));
  }
}
