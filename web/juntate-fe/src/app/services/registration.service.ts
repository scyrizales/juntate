import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {of} from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  private user: User = null;
  private url = `http://45.56.107.112:3030/junta/`;

  constructor(private http: HttpClient) {}

  public getUser(): User {
    return this.user;
  }

  public login(email: string, password: string): Observable<User> {
    return of(this.user);
  }

  public register(user: User): Observable<User> {
    const signInUrl = this.url + 'signin';
    return this.http.post<User>(signInUrl, user);
  }
}
