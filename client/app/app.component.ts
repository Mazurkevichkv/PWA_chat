import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: "my-app",
    styles: [require("./app.styles.scss")],
    template: require("./app.template.html"),
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {

    link: string = "https://likeit-risingapp.herokuapp.com/";

    constructor(private http: Http) {
    }

    private apiSend() {

        console.log(this.link);

        this.http.get(this.link, { withCredentials: true })
            // .map((res) => {JSON.parse(res.text())})
            .subscribe(
                (res) => {
                    console.log(res);
                },
                err => console.error(err)
            );
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
