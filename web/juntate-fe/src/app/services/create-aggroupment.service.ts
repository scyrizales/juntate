import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Aggroupment } from '../models/aggroupment';
import { of } from 'rxjs/observable/of';
import { User } from '../models/user';


@Injectable()
export class CreateAggroupmentService {
  private aggroupment: Aggroupment = new Aggroupment('junta 1', 10);
  constructor() { }

  public createAggroupment(aggroupment: Aggroupment, user: User): Observable<Aggroupment> {
    return of(this.aggroupment);
  }
}
