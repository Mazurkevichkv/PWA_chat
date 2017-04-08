import {ChatCard} from "./chat-card.model";

export class ChatList {
    constructor (cards) {
        this.build(cards);
    }

    public chatCards: Array<ChatCard>;

    public  get() {
        return this.chatCards;
    }

    private build (cards) {
        this.chatCards = [];
        cards.forEach((card) => {
            this.chatCards.push(new ChatCard(card));
        })
    }
}