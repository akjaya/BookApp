import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { book } from '../book';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component'
import { Dialog1Component } from '../dialog1/dialog1.component';
import { RouterserviceService } from '../routerservice.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  arr1: Array<any> = [];
  arr1storing: Array<any> = [];
  arr1printing: Array<any> = [];
  flagauthor:boolean=false;
  constructor(private googleApiService: GoogleApisService,public dialog:MatDialog,private routerService:RouterserviceService) { }

  ngOnInit() {
    if(sessionStorage.getItem('key')==null)
    {
      this.routerService.tohome();
    }
    else
    {
    this.flagauthor=true;

    this.googleApiService.getAllBooks().subscribe(
      
      data=>{
        this.arr1 = data;
        for (let i = 0; i < this.arr1['items'].length; i++) {
          if (this.arr1['items'][i]['id'] != undefined) {
            this.arr1storing['bookId'] = this.arr1['items'][i]['id'];
          }
          else {
            this.arr1storing['bookId'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr1storing['bookTitle'] = this.arr1['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr1storing['bookTitle'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr1storing['bookPublisher'] = this.arr1['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr1storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr1['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr1['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr1storing['bookPublishedDate'] = this.arr1['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr1storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr1['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr1storing['bookDescription'] = this.arr1['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr1storing['bookDescription'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['categories'] != undefined) {
            this.arr1storing['bookCategory'] = this.arr1['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr1storing['bookCategory'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr1storing['bookImage'] = this.arr1['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr1storing['bookImage'] = "-";
          }

          if (this.arr1['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr1storing['bookPrice'] = this.arr1['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr1storing['bookCurrencytCode'] = this.arr1['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr1storing['bookCurrencytCode'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr1['items'][i]['volumeInfo']['language'] == "en") {
              this.arr1storing['bookLanguage'] = "English";
            }
            if (this.arr1['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr1storing['bookLanguage'] = "French";
            }
            if (this.arr1['items'][i]['volumeInfo']['language'] == "de") {
              this.arr1storing['bookLanguage'] = "German";
            }
            if (this.arr1['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr1storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr1storing['bookLanguage'] = this.arr1['items'][i]['volumeInfo']['language'];
          //
          if (this.arr1['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr1storing['preview'] = this.arr1['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr1storing['preview'] = "-";
          }
          if (this.arr1['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr1storing['bookAuthors'] = this.arr1['items'][i]['volumeInfo']['authors'];
            this.arr1storing['author'] = this.arr1['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr1storing['bookAuthors'] = "-";
          }
          this.arr1printing.push(this.arr1storing);
          this.arr1storing = [];
        }

        console.log(this.arr1printing);





    },
    error =>{
      console.log(error);
     }
     );
  }
}
  openDialog(book: book){
    const dialogRef=this.dialog.open(Dialog1Component,
      {data:{preview:book.preview,bookAuthors:book.bookAuthors,bookId:  book.bookId, bookTitle: book.bookTitle, bookImage: book.bookImage, bookDescription: book.bookDescription, bookPublisher: book.bookPublisher, bookPublishedDate: book.bookPublishedDate}});
      dialogRef.afterClosed().subscribe(result =>{
        console.log(result);
      });
  }
}
