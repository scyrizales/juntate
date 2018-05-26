import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {RegistrationService} from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
    private user: User;

    constructor(private registrationService: RegistrationService,
                private router: Router) {
        this.user = new User('', '', '', '', '', null, '');
    }

    private registerUser(): void {
        this.registrationService.register(this.user).subscribe(
            () => this.router.navigateByUrl('/aperturar')
        );
    }
}
