import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { of } from 'rxjs/observable/of';


@Injectable()
export class RegistrationService {
  public mockedUser: User = new User('vimurillo@gmail.com', 'Victor Vladimir', 'Murillo Guerrero', '43617614');
  constructor() { }

  public register(user: User): Observable<User> {
    return of(this.mockedUser);
  }

  public getUser(): User {
    return this.mockedUser;
  }

  public login(email: string, password: string): Observable<User> {
    return of(this.mockedUser);
  }
}
