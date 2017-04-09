import { Injectable } from '@angular/core';
import {ChatList} from "./chat-models/chat-list.model";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Subject, Observable, BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class ChatService {

    public list: ChatList;

    private subject: Subject<any> = new Subject<any>();

    constructor(private http: Http) {
        this.http = http;
    }

    public messagesList: any;

    public getMessage(): Observable<any> {
        return this.subject;
    }
}