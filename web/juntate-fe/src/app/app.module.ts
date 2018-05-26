import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {RegistrationServiceService} from './services/registration-service.service';
import {IndexComponent} from './components/index/index.component';

const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'aperturar', component: RegistrationFormComponent},
    /*{
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    { path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [RegistrationServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
