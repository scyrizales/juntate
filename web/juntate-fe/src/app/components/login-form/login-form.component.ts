import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  private email = '';
  private password = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  private isValid(): boolean {
    return this.email.length > 0 && this.password.length > 0;
  }

  private login(): void {
    this.registrationService.login(this.email, this.password).
      subscribe((user: User) => {
        this.router.navigateByUrl('/juntas');
      });
  }
}
