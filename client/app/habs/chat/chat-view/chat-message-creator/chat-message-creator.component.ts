import {Component, NgZone} from "@angular/core";
import {Message} from "../../chat-models/message.model";
import {ChatService} from "../../chat.service";
import {ChatCard} from "../../chat-models/chat-card.model";


@Component({
    selector: "chat-message-creator",
    styles: [require("./chat-message-creator.styles.scss")],
    template: require("./chat-message-creator.template.html")
})

export class ChatMessageCreatorComponent {
    private currMessage:ChatCard;

    constructor (private chatService: ChatService, private zone:NgZone) {
        this.currMessage = new ChatCard({});
        this.chatService = chatService;
    }
}