import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthComponent} from "./auth.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'login', pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            },

        ])
    ],
    exports: [RouterModule],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegistrationComponent
    ],
    bootstrap:    [ AuthComponent ]
})

export class AuthModule { }