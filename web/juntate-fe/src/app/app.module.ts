import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationService } from './services/registration.service';
import { CreateAggroupmentComponent } from './components/create-aggroupment/create-aggroupment.component';
import { CreateAggroupmentService } from './services/create-aggroupment.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    CreateAggroupmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ RegistrationService, CreateAggroupmentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
