import { Injectable } from '@angular/core';
import {ChatList} from "./chat-models/chat-list.model";
import {Http, RequestOptions} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";

@Injectable()
export class ChatService {
    private listMock: any = [
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 1
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 2
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 3
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 4
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 5
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996',
            id: 6
        }
    ];

    private list: ChatList;

    private _chatListStream:Subject<any> = new Subject<any>();

    constructor(private http: Http) {
        this.http = http;
        this.list = new ChatList(this.listMock);
        console.log(this.list);

    }

    public get chatList () {
        return this.list.chatCards;
    }


    get chatListStream():Observable<any> {
        return this._chatListStream;
    }

    public updateChatList(newMessage) {
        this._chatListStream.next(this.list.chatCards.push(newMessage));
    }

    public loadChatList () {

        let request = new RequestOptions();
        request.headers = new Headers();
        request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.withCredentials = true;

        return this.http.get(`https://likeit-risingapp.herokuapp.com/rest/rooms/?count=${4}`, request)
            .map((res) => {JSON.parse(res.text())})
            .subscribe(
                (res) => {
                    this.list = new ChatList(res);
                },
                err => { console.error(err) }
            );
    }

    public loadChat (id: number) {

        let request = new RequestOptions();
        request.headers = new Headers();
        request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        request.withCredentials = true;

        return this.http.get(`https://likeit-risingapp.herokuapp.com/rest/rooms/${id}/messages/?offset=${2}&count=${1}`, request)
            .map((res) => {JSON.parse(res.text())})
            .subscribe(
                (res) => {
                    this.list = new ChatList(res);
                },
                err => { console.error(err) }
            );
    }
}