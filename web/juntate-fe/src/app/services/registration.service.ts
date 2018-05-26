import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {of} from 'rxjs/observable/of';


@Injectable()
export class RegistrationService {
    private mockedUser: User = new User('vimurillo@gmail.com', 'Victor Vladimir', 'Murillo Guerrero', '43617614', 'secret');

    constructor() {
    }

  public getUser(): User {
    return this.mockedUser;
  }

  public login(email: string, password: string): Observable<User> {
    return of(this.mockedUser);
  }

  public register(user: User): Observable<User> {
        return of(this.mockedUser);
  }
}
