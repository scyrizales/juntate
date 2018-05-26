import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private registrationService: RegistrationService) { }

  private isLogged(): boolean {
    return this.registrationService.getUser() != null;
  }

  private userId(): string {
    return this.registrationService.getUser().id;
  }
}
