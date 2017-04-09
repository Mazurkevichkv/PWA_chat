import { Component } from "@angular/core";
import {ChatService} from "../chat.service";

@Component({
    selector: "chat-view",
    styles: [require("./chat-view.styles.scss")],
    template: require("./chat-view.template.html"),
    providers: [ChatService]
})

export class ChatViewComponent{
    constructor(private chatService: ChatService) {
        this.chatService = chatService;

    }

    ngOnInit() {
    }
}