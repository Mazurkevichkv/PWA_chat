const DEFAULT_URL = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKKSl5SxNO-zFITe-DfpNNZWzByruYk75jV1-KSv-REefCkK8u';

export class ChatCard {
    constructor(card) {
        this.chatName = card.chatName;
        this.imageUrl = card.imageUrl || DEFAULT_URL;
        this.lastMessage = card.lastMessage;
        this.lastMessageAuthorName = card.lastMessageAuthorName;
        this.sendTime = card.sendTime;
        this.roomId = card.roomId;

    }

    public chatName: string;
    public imageUrl: any;
    public lastMessage: string;
    public lastMessageAuthorName: string;
    public sendTime: string;
    public roomId: number;
}