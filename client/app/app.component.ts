import {Component, ViewEncapsulation} from "@angular/core";
import {Http} from "@angular/http";


@Component({
    selector: "my-app",
    styles: [require("./app.styles.scss")],
    template: require("./app.template.html"),
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {

    constructor(private http: Http) {
    }

    private logOut() {
        this.http.post("https://likeit-risingapp.herokuapp.com/logout",  {})
            .map((res) => {JSON.parse(res.text())})
            .subscribe(
                (res) => {
                    console.log(res);
                },
                err => console.error(err)
            );
    }
}
