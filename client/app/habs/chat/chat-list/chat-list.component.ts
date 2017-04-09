import { Component } from "@angular/core";
import {ChatService} from "../chat.service";
import {MdDialog, MdDialogRef} from '@angular/material';
import {Observable} from "rxjs/Rx";
import {FormControl} from "@angular/forms";

@Component({
    selector: "chat-list",
    styles: [require("./chat-list.styles.scss")],
    template: require("./chat-list.template.html"),
    providers: [ChatService]
})


export class ChatListComponent {
    public chatList:any;

    constructor(private chatService: ChatService) {
        this.chatService = chatService;
        // this.chatService.chatListStream.subscribe((list) => {
        //  //   this.chatList = list;
        // })
    }

    //selectedOption: string;
    //
    // openDialog() {
    //     let dialogRef = this.dialog.open(CreateChatComponent);
    //     dialogRef.afterClosed().subscribe(result => {
    //         this.selectedOption = result;
    //     });
    // }
    //
    public get chatList () {
        console.log(this.chatService.chatList);
        return this.chatService.chatList;
    }

    private openChat (item) {
        this.chatService.loadChat(item.id);
        this.chatList.forEach(item => {
            item.active = false
        });
        item.active = true;
    }
}

@Component({
    selector: "create-chat",
    styles: [require("./create-chat.styles.scss")],
    template: require("./create-chat.template.html")
})

class User {
    constructor (name) {
        this.name = name;
    }
    public name: string
}

export class CreateChatComponent {
    // constructor() {}
    //
    // myControl = new FormControl();
    // options = [
    //     new User('Mary'),
    //     new User('Shelley'),
    //     new User('Igor')
    // ];
    // filteredOptions: Observable<User[]>;
    //
    // ngOnInit() {
    //     this.filteredOptions = this.myControl.valueChanges
    //         .startWith(null)
    //         .map(user => user && typeof user === 'object' ? user.name : user)
    //         .map(name => name ? this.filter(name) : this.options.slice());
    // }
    //
    // filter(name: any) {
    //     return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option.name));
    // }
    //
    // displayFn(user: any) {
    //     return user ? user.name : user;
    // }
}