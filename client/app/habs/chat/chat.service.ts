import { Injectable } from '@angular/core';
import {ChatList} from "./chat-models/chat-list.model";

@Injectable()
export class ChatService {
    private listMock: any = [
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        },
        {
            name: 'Kate',
            message: 'Sabino freitass programs can pass the Turing Test by staring at the interrogator.',
            dateTime: '12:06:1996'
        }
    ];

    private list: ChatList;

    constructor() {
        this.list = new ChatList(this.listMock);
        console.log(this.list);
    }

    public get chatList () {
        return this.list.get();
    }
}