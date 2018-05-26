import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {of} from 'rxjs/observable/of';


@Injectable()
export class RegistrationServiceService {
    private mockedUser: User = new User('vimurillo@gmail.com', 'Victor Vladimir', 'Murillo Guerrero', '43617614', 'secret');

    constructor() {
    }

    public register(user: User): Observable<User> {
        return of(this.mockedUser);
    }
}
