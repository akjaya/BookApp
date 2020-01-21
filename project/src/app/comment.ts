import { author } from './author';

export class comment {


    bookId: string;
    bookTitle: string;
    bookAuthors: Array<any>;
    bookImage: any;
    usercomment:string;
    bookDescription:string;
    commentId:number;
    username:string;
    constructor()
    {
        this.bookId='';
        this.bookTitle='';
        this.bookAuthors=[];
        this.bookImage='';
        this.usercomment='';
        this.bookDescription='';
        this.commentId=0;
    }
}


