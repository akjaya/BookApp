import { Component, OnInit } from '@angular/core';
import { comment } from '../comment';
import { FormGroup, FormControl } from '@angular/forms';
import { InternalService } from '../internal.service';
import { error } from '@angular/compiler/src/util';
import { getLocaleTimeFormat } from '@angular/common';
import { AuthorComponent } from '../author/author.component';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentobj: comment = new comment();
  commentForm: FormGroup;
  comment: FormControl;
  bookId: string;
  arr: Array<any>;
  bid: number;
  commentArray: Array<any>;
  count: number = 0;
  username: string;
  flag: boolean;
  flagComment: boolean;
  constructor(private internalService: InternalService, private routerService: RouterserviceService) { }

  ngOnInit() {
    // this.flagComment=this.a.flagauthor;


    if (sessionStorage.getItem('key') == null) {
      this.routerService.tohome();
    }
    else {
      console.log(this.flagComment);
      let username = sessionStorage.getItem('key');
      if (sessionStorage.getItem('key') != null) {
        this.flag = false;

      }
      else {
        this.flag = true;
      }
      this.username = sessionStorage.getItem('key');
      this.comment = new FormControl('');
      this.commentForm = new FormGroup({
        comment: this.comment
      });
      this.bookId = this.internalService.getId();
      this.getComments(this.bookId);

    }
  }

  onAddComment() {
    console.log(this.commentForm.value.comment);
    this.commentobj.usercomment = this.commentForm.value.comment;
    this.bookId = this.internalService.getId();
    console.log(this.bookId);
    this.arr = this.internalService.getArray();
    this.bid = this.arr.findIndex(b => b.bookId == this.bookId);
    this.commentobj.bookId = this.arr[this.bid].bookId;
    this.commentobj.bookTitle = this.arr[this.bid].bookTitle;
    this.commentobj.bookAuthors = this.arr[this.bid].author;
    this.commentobj.bookImage = this.arr[this.bid].bookImage;
    this.commentobj.bookDescription = this.arr[this.bid].bookDescription;
    this.commentobj.username = sessionStorage.getItem('key');
    let date: Date = new Date();
    this.commentobj.commentId = date.getUTCMilliseconds();
    //console.log(date);
    //console.log(date.getUTCMilliseconds());
    date = null;

    this.internalService.addComment(this.commentobj).subscribe(
      data => {
        this.commentForm.reset();
        this.getComments(this.bookId);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }


  getComments(id) {
    this.internalService.getComments(id).subscribe(
      data => {
        console.log(data);
        this.commentArray = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  delete(id) {
    console.log(id);
    this.internalService.deleteComment(id).subscribe(
      date => {
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }
}
