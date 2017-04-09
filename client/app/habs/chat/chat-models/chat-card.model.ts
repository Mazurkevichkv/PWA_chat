export class ChatCard {
    constructor(card) {
        this.name = card.name;
        this.imageUrl = card.imageUrl;
        this.message = card.message;
        this.dateTime = card.dateTime;
        this.id = card.id;

    }

    public name: string;
    public imageUrl: any;
    public message: string;
    public dateTime: string;
    public id: number;
}