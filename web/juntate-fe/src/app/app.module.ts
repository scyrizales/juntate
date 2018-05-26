import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationServiceService } from './services/registration-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ RegistrationServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
