import { Component } from "@angular/core";
import {ChatService} from "../../chat.service";

@Component({
    selector: "chat-main",
    styles: [require("./chat-main.styles.scss")],
    template: require("./chat-main.template.html")
})

export class ChatMainComponent {
    constructor(private chatService: ChatService) {
        this.chatService = chatService;
    }

    public get chatList () {
        return this.chatService.chatList;
    }
}