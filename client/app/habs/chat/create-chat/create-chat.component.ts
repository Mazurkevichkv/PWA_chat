// import {Component, ViewEncapsulation} from "@angular/core";
// import {MdDialogRef} from "@angular/material";
// import {Observable} from "rxjs/Rx";
// import {FormControl} from "@angular/forms";
//
// @Component({
//     selector: "create-chat",
//     styles: [require("./create-chat.styles.scss")],
//     template: require("./create-chat.template.html"),
//     encapsulation: ViewEncapsulation.None
// })
//
// class User {
//     constructor (name) {
//         this.name = name;
//     }
//     public name: string
// }
// export class CreateChatComponent {
//     constructor(public dialogRef: MdDialogRef<CreateChatComponent>) {}
//
//     myControl = new FormControl();
//     options = [
//         new User('Mary'),
//         new User('Shelley'),
//         new User('Igor')
//     ];
//     filteredOptions: Observable<User[]>;
//
//     ngOnInit() {
//         this.filteredOptions = this.myControl.valueChanges
//             .startWith(null)
//             .map(user => user && typeof user === 'object' ? user.name : user)
//             .map(name => name ? this.filter(name) : this.options.slice());
//     }
//
//     filter(name: any) {
//         return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option.name));
//     }
//
//     displayFn(user: any) {
//         return user ? user.name : user;
//     }
// }