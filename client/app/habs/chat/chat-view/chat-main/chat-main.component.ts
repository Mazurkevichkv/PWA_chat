import { Component } from "@angular/core";
import {ChatService} from "../../chat.service";
import {RequestOptions, Headers, Http} from "@angular/http";

@Component({
    selector: "chat-main",
    styles: [require("./chat-main.styles.scss")],
    template: require("./chat-main.template.html"),
    providers: [ChatService]
})

export class ChatMainComponent {
    public messageList;
    constructor(private chatService: ChatService, private http: Http) {
        this.chatService = chatService;
        this.http = http;
        this.loadChat(5);
    }

    public loadChat (id: number) {
        let request = new RequestOptions();
        request.headers = new Headers();
        request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.withCredentials = true;

        let response;

        return this.http.get(`https://likeit-risingapp.herokuapp.com/rest/rooms/${id}/messages?count=${300}`, request)
            .map((res) => {response = JSON.parse(res.text())})
            .subscribe(
                () => {
                    this.messageList = response.data.messages;
                },
                err => { console.error(err) }
            );
    }
}