import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {RegistrationService} from '../../services/registration.service';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
    private user: User;

    constructor(private registrationService: RegistrationService) {
        this.user = new User('', '', '', '', '', null);
    }

    private registerUser(): void {
        this.registrationService.register(this.user).subscribe(
            user => alert(' user dni is ' + user.dni)
        );
    }
}
