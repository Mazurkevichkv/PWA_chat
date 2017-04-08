import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import { AppComponent }  from "./app.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CookieXSRFStrategy, XSRFStrategy} from "@angular/http";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MaterialModule,
        RouterModule.forRoot([
            {
                path: 'auth',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },

        ])
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent
    ],
    bootstrap:    [ AppComponent ],
    providers: [
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy("Cookie-token", "X-CSRF-TOKEN")},
    ]
})

export class AppModule { }