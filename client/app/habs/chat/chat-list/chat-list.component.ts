import { Component } from "@angular/core";
import {ChatService} from "../chat.service";

@Component({
    selector: "chat-list",
    styles: [require("./chat-list.styles.scss")],
    template: require("./chat-list.template.html"),
    providers: [ChatService]
})


export class ChatListComponent {
    constructor(private chatService: ChatService) {
        this.chatService = chatService;
    }

    public get chatList () {
        return this.chatService.chatList;
    }
}