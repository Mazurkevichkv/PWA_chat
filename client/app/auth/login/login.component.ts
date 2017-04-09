import { Component } from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

export class User {
    username: string;
    password: string;
}

@Component({
    selector: "login",
    styles: [require("./login.styles.scss")],
    template: require("./login.template.html")
})


export class LoginComponent {
    private user = new User();

    constructor(private http: Http, private router: Router) {
        this.router = router;
    }

    private isValid(field) {
        return field;
    }

    private logIn() {

        let request = new RequestOptions();
        request.headers = new Headers();
        request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.withCredentials = true;

        let body:URLSearchParams = new URLSearchParams();
        body.set("username", this.user.username);
        body.set("password", this.user.password);

        console.log(request);

        this.http.post("https://likeit-risingapp.herokuapp.com/login", body.toString(), request) //JSON.stringify(this.user))
            .map((res) => JSON.parse(res.text()))
            .subscribe(
                (res) => {
                    this.router.navigate(['/habs']);
                    console.log("Success", res);
                },
                (err) => {
                    if(err.status == 401) {
                        console.error("Wrong login or password.");
                    }
                    else if(err.status == 404) {
                        console.error("Server is not found.");
                    }
                }
            );
    }
}
