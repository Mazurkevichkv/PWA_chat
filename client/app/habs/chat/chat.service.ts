import { Injectable } from '@angular/core';
import {ChatList} from "./chat-models/chat-list.model";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Subject, Observable, BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class ChatService {

    // public list: ChatList;
    // public subject: Subject = new Subject();
    //
    // constructor(private http: Http) {
    //     this.http = http;
    // }
    //
    // public loadChat (id: number) {
    //     let request = new RequestOptions();
    //     request.headers = new Headers();
    //     request.headers.set("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
    //     request.withCredentials = true;
    //
    //     let response;
    //
    //     return this.http.get(`https://likeit-risingapp.herokuapp.com/rest/rooms/${id}/messages?count=${300}`, request)
    //         .map((res) => {response = JSON.parse(res.text())})
    //         .subscribe(
    //             () => {
    //                 this.subject.next(response.data.messages);
    //             },
    //             err => { console.error(err) }
    //         );
    // }
}