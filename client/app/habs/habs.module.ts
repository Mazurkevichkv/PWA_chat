import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import {RouterModule} from "@angular/router";
import {HabsComponent} from "./habs.component";
import {ChatListComponent} from "./chat/chat-list/chat-list.component";
import {ChatViewComponent} from "./chat/chat-view/chat-view.component";
import {ChatHeaderComponent} from "./chat/chat-view/chat-header/chat-header.component";
import {ChatMessageCreatorComponent} from "./chat/chat-view/chat-message-creator/chat-message-creator.component";
import {ChatMainComponent} from "./chat/chat-view/chat-main/chat-main.component";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '', redirectTo: 'habs', pathMatch: 'full'
            }
        ])
    ],
    exports: [RouterModule],
    declarations: [
        HabsComponent,
        ChatListComponent,
        ChatViewComponent,
        ChatHeaderComponent,
        ChatMessageCreatorComponent,
        ChatMainComponent
    ],
    bootstrap:    [ HabsComponent ]
})

export class HabsModule { }