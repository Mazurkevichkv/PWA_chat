import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import { AppComponent }  from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {HabsComponent} from "./habs/habs.component";
import {HabsModule} from "./habs/habs.module";
import {CookieXSRFStrategy, XSRFStrategy} from "@angular/http";

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'registration', component: RegistrationComponent}
        ]
    },
    { path: 'habs', component: HabsComponent}
];

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MaterialModule,
        AuthModule,
        HabsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap:    [ AppComponent ],
    providers: [
        { provide: XSRFStrategy, useValue: new CookieXSRFStrategy("Cookie-token", "X-CSRF-TOKEN")},
    ]
})

export class AppModule { }