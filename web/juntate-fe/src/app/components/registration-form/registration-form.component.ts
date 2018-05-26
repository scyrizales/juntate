import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RegistrationServiceService } from '../../services/registration-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  private user: User;

  constructor(private registrationService: RegistrationServiceService) {
    this.user = new User('' , '', '', '','');
  }

  private registerUser(): void {
    this.registrationService.register(this.user).subscribe(
      user => alert(' user dni is ' + user.dni)
    );
  }
}
