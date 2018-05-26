import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {of} from 'rxjs/observable/of';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {
  private user: User = null;
  private url = `http://45.56.107.112:3030/usuario/`;

  constructor(private http: HttpClient) {
    this.user = User.fromSend(JSON.parse(localStorage.getItem('loggerUser')))
  }

  public getUser(): User {
    return this.user;
  }

  public login(email:String, password:String): Observable<User> {
    const signInUrl = this.url + 'signin';
    return this.http.post<User>(signInUrl, { email, password })
      .map(response => {
        const loggedUser = User.fromSend(response);
        localStorage.setItem('loggerUser', JSON.stringify(loggedUser));
        this.user = loggedUser;
        return loggedUser;
      });
  }

  public register(user: User): Observable<User> {
    const signInUrl = this.url + 'signUp';
    return this.http.post<User>(signInUrl, user.toSend())
      .map(response => {
        const loggedUser = User.fromSend(response);
        this.user = loggedUser;
        return loggedUser;
      });
  }
}
