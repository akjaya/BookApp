import { Component, OnInit } from '@angular/core';
import { InternalService } from '../internal.service';
import { SearchComponent } from '../search/search.component';
import { book } from '../book';
import { FormGroup, FormControl } from '@angular/forms';
import { comment } from '../comment';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: string;
  arr: Array<any>;
  bid: number;
  book1: Array<any> = [];

  constructor(private internalService: InternalService, private routerService: RouterserviceService) { }

  ngOnInit(


  ) {


    if (sessionStorage.getItem('key') == null) {
      this.routerService.tohome();
    }
    else {



      this.bookId = this.internalService.getId();
      console.log(this.bookId);
      //console.log(this.s.arr1printing);

      this.arr = this.internalService.getArray();
      console.log(this.arr);

      this.bid = this.arr.findIndex(b => b.bookId == this.bookId);
      console.log(this.bid);
      console.log(this.arr[this.bid].bookId);
      console.log(this.book1);
      this.book1['bookId'] = this.arr[this.bid].bookId;
      this.book1['bookTitle'] = this.arr[this.bid].bookTitle;
      this.book1['author'] = this.arr[this.bid].author;
      this.book1['bookImage'] = this.arr[this.bid].bookImage;
      this.book1['bookDescription'] = this.arr[this.bid].bookDescription;

      console.log(this.book1);

    }



  }



}
