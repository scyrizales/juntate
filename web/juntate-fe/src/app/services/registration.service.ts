import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {of} from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  private url = `http://45.56.107.112:3030/usuario/`;

  constructor(private http: HttpClient) {
  }

  public getUser(): User {
    return User.fromSend(JSON.parse(localStorage.getItem('loggerUser')));
  }

  public login(email: string, password: string): Observable<User> {
    const signInUrl = this.url + 'signin';
    return this.http.post<User>(signInUrl, { email, password })
      .map(response => {
        let loggedUser = null;
        if (!('error' in response)) {
          loggedUser = User.fromSend(response);
          localStorage.setItem('loggerUser', JSON.stringify(response));
        }
        return loggedUser;
      });
  }

  public register(user: User): Observable<User> {
    const signInUrl = this.url + 'signUp';
    return this.http.post<User>(signInUrl, user.toSend())
      .pipe(
        catchError(() => {
          alert('error!');
          return of(null); })
      )
      .map(response => {
        let userResponse = null;
        if (!('error' in response)) {
          userResponse = User.fromSend(response);
          localStorage.setItem('loggerUser', JSON.stringify(response));
        }
        return userResponse;
      });
  }
}
