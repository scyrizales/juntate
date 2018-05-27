import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private registrationService: RegistrationService, private router: Router) { }

  private isLogged(): boolean {
    return this.registrationService.getUser() != null;
  }

  private userId(): string {
    return this.registrationService.getUser().email;
  }

  private logout(): void {
    this.registrationService.logout();
    this.router.navigateByUrl('/');
  }
}
