import { Component, OnInit, Input } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { RouterserviceService } from '../routerservice.service';
import { book } from '../book';
import { SearchComponent } from '../search/search.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
import {MatSnackBar} from '@angular/material/snack-bar';
import { InternalService } from '../internal.service';
@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private googleserv: GoogleApisService, private routerService: RouterserviceService, private s:SearchComponent,public dialog:MatDialog
    ,private internalService:InternalService) { }
  @Input()
  bk:any;
  flag:boolean=true;;
  username1:string;
  book1: book = new book;
  // s:SearchComponent;
  arr1printing:Array<any>;
  flag2:boolean;
  arr2: Array<any> = [];
  bid: number;

  ngOnInit() {
    let username=sessionStorage.getItem('key');
    if(sessionStorage.getItem('key')!=null)
    {
      this.flag2=false;

    }
   else
   {
     this.flag2=true;
   }
  }
  //add to favourites----------
  favourite(bookId) {

    this.username1 = sessionStorage.getItem('key');

    this.internalService.getFavouriteBooksByIdAndUsername(bookId, this.username1).subscribe(

      data => {

        this.arr2.push(data);
        if (this.arr2[0] == null) {
          this.arr2 = [];
          this.bid = this.s.arr1printing.findIndex(b => b.bookId == bookId)
          console.log(this.bid);
          this.book1.bookId = this.s.arr1printing[this.bid].bookId;
          this.book1.bookTitle = this.s.arr1printing[this.bid].bookTitle;
          this.book1.bookAuthors = this.s.arr1printing[this.bid].bookAuthors;
          this.book1.bookImage = this.s.arr1printing[this.bid].bookImage;
          this.book1.bookDescription = this.s.arr1printing[this.bid].bookDescription;
          this.book1.bookPublisher = this.s.arr1printing[this.bid].bookPublisher;
          this.book1.bookPublishedDate = this.s.arr1printing[this.bid].bookPublishedDate;
          this.book1.bookCategory = this.s.arr1printing[this.bid].bookCategory;
          this.book1.bookPrice = this.s.arr1printing[this.bid].bookPrice;
          
          if (this.s.arr1printing[this.bid].bookLanguage != undefined) {
            if (this.s.arr1printing[this.bid].bookLanguage == "en") {
              this.book1.bookLanguage = "English";
            }
            if (this.s.arr1printing[this.bid].bookLanguage == "fr") {
              this.book1.bookLanguage = "French";
            }
            if (this.s.arr1printing[this.bid].bookLanguage == "de") {
              this.book1.bookLanguage = "German";
            }
            if (this.s.arr1printing[this.bid].bookLanguage == "ms") {
              this.book1.bookLanguage = "Malaysian";
            }
          }
          this.book1.bookCurrencytCode = this.s.arr1printing[this.bid].bookCurrencytCode;

          this.book1.username = sessionStorage.getItem("key");

          this.internalService.addBookToFav(this.book1).subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            }
          );
          this._snackBar.open("Added to Favourite", "Ok", {
            duration: 2000,
          });
        }
        else
          {
            this._snackBar.open("Already added to Favourite ", "Ok", {
              duration: 2000,
            });
          }



      }, error => { console.log(error); }
    );

    console.log(bookId);





  }

  //add book to recommendation list

  recommend(bookId) {

    console.log(bookId);
    console.log(this.s.arr1printing);
    this.flag=false;
    if (sessionStorage.getItem("key") !== null) {

      this.username1 = sessionStorage.getItem('key');

      this.internalService.getRecommendedBooksByIdAndUsername(bookId, this.username1).subscribe(


        data => {

          this.arr2.push(data);
          if (this.arr2[0] == null) {
            this.arr2 = [];
            
            this.bid = this.s.arr1printing.findIndex(b => b.bookId == bookId)
            console.log(this.bid);
            this.book1.bookId = this.s.arr1printing[this.bid].bookId;
            this.book1.bookTitle = this.s.arr1printing[this.bid].bookTitle;
            this.book1.bookAuthors = this.s.arr1printing[this.bid].bookAuthors;
            this.book1.bookImage = this.s.arr1printing[this.bid].bookImage;
            this.book1.bookDescription = this.s.arr1printing[this.bid].bookDescription;
            this.book1.bookPublisher = this.s.arr1printing[this.bid].bookPublisher;
            this.book1.bookPublishedDate = this.s.arr1printing[this.bid].bookPublishedDate;
            this.book1.bookCategory = this.s.arr1printing[this.bid].bookCategory;
            this.book1.bookPrice = this.s.arr1printing[this.bid].bookPrice;
            this.book1.bookLanguage = this.s.arr1printing[this.bid].bookLanguage;
            this.book1.bookCurrencytCode = this.s.arr1printing[this.bid].bookCurrencytCode;

            this.book1.username = sessionStorage.getItem("key");

            this.internalService.addBookToRecom(this.book1).subscribe(
              data => {
                console.log(data);
                this._snackBar.open("Added to Recommend", "Ok", {
                  duration: 2000,
                });
              },
              error => {
                console.log(error);
              }
            );
            
          }
          
          else
          {
            this._snackBar.open("Already added to Recommend List ", "Ok", {
              duration: 2000,
            });
          }

        }, error => { }
      );






    }
    else {
      this.routerService.tologin();
    }

  }

  unrecommend(bookId)
  {
    console.log(bookId);
    this.username1 = sessionStorage.getItem('key');
    console.log(this.username1);
    this.flag=true;
    this.internalService.unrecommend(bookId,this.username1).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
  },
    error => {
      console.log(error);

    });
    this._snackBar.open("Removed From Recommend", "Ok", {
      duration: 2000,
    });

  }

  //view my recommendations
  // viewMyRecom() {
  //   this.routerService.tomyrecommendation();
  // }
  // dialog
openDialog(book: book){
  const dialogRef=this.dialog.open(DialogComponent,
    {data:{preview:book.preview,bookId:  book.bookId, bookTitle: book.bookTitle, bookImage: book.bookImage, bookDescription: book.bookDescription, bookPublisher: book.bookPublisher, bookPublishedDate: book.bookPublishedDate,textSnippet:book.textSnippet}});
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
    });
}


}
