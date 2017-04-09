import { Component } from "@angular/core";
import {ChatService} from "../chat.service";
import {RequestOptions, Http, Headers} from "@angular/http";
import {ChatList} from "../chat-models/chat-list.model";

@Component({
    selector: "chat-list",
    styles: [require("./chat-list.styles.scss")],
    template: require("./chat-list.template.html"),
    providers: [ChatService]
})


export class ChatListComponent {
    public list:any;

    constructor(private chatService: ChatService, private http:Http) {
        this.chatService = chatService;
        this.http = http;
        this.loadChatList();
    }

    public loadChatList () {

        let request = new RequestOptions();
        request.headers = new Headers();
        request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.withCredentials = true;

        let response;
        return this.http.get(`https://likeit-risingapp.herokuapp.com/rest/rooms?count=${4}`, request)
            .map((res) => {
                response = JSON.parse(res.text())
            })
            .subscribe(
                () => {
                    this.list = new ChatList(response.data.rooms);
                    this.openChat(this.list.chatCards[0]);
                },
                err => { console.error(err) }
            );
    }

    public get chatList () {
        return this.list && this.list.chatCards;
    }

    private openChat (item) {
       // this.chatService.loadChat(item.roomId);
        this.chatList.forEach(item => {
            item.active = false
        });
        item.active = true;
    }
}
