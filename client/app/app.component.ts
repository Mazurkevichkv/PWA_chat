import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: "my-app",
    styles: [require("./app.styles.scss")],
    template: require("./app.template.html"),
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {

}
