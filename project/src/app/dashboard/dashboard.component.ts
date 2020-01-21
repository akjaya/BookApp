import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { book } from '../book';
import { RouterserviceService } from '../routerservice.service';
// import 'bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private googleApiService: GoogleApisService, private routerService: RouterserviceService) { }
  string1: string;
  string2: string;
  arr1: Array<any> = [];
  arr1storing: Array<any> = [];
  arr1printing: Array<any> = [];
  arr2storing: Array<any> = [];
  arr2printing: Array<any> = [];
  arr2: Array<any> = [];
  arr3: Array<any> = [];
  arr3storing: Array<any> = [];
  arr3printing: Array<any> = [];
  arr4: Array<any> = [];
  arr4storing: Array<any> = [];
  arr4printing: Array<any> = [];
  arr5: Array<any> = [];
  arr5storing: Array<any> = [];
  arr5printing: Array<any> = [];
  mypic: string;
  date: Array<any> = [];
  d: Date;
  datefinal: any;

  arr6: Array<any> = [];
  arr7: Array<any> = [];
  arr8: Array<any> = [];
  arr9: Array<any> = [];

  arr10: Array<any> = [];
  arr10storing: Array<any> = [];
  arr10printing: Array<any> = [];

  arr11: Array<any> = [];
  arr12: Array<any> = [];
  arr13: Array<any> = [];
  arr14: Array<any> = [];

  arr15: Array<any> = [];
  arr15storing: Array<any> = [];
  arr15printing: Array<any> = [];
  arr16: Array<any> = [];
  arr16storing: Array<any> = [];
  arr16printing: Array<any> = [];
  arr17: Array<any> = [];
  arr17storing: Array<any> = [];
  arr17printing: Array<any> = [];

  ViewRecommendedBooks() {
    this.routerService.torecommendations();
  }

  ViewAuthors() {
    this.routerService.toauthor();
  }

  ViewFavourite() {
    this.routerService.tofavourites();
  }

  ngOnInit() {


    // image section
    this.mypic = localStorage.getItem("x");
    // console.log(this.mypic);
    // image section
    this.googleApiService.getDramaBooks().subscribe(
      data => {

        //console.log(data);
        this.arr1 = data;
        //console.log(this.arr1);

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
            this.arr1storing['author'] = this.arr1['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr1storing['author'] = "-";
          }
          this.arr1printing.push(this.arr1storing);
          this.arr1storing = [];
        }

        //console.log(this.arr1printing);


      },
      error => {
        console.log(error);
      }
    );

    // this.googleApiService.getFictionBook().subscribe(
    //   data => {

    //     //console.log(data);
    //     this.arr2 = data;

    //     for (let i = 0; i < this.arr2['items'].length; i++) {
    //       this.arr2storing['bookId'] = this.arr2['items'][i]['id'];
    //       this.arr2storing['bookTitle'] = this.arr2['items'][i]['volumeInfo']['title'];
    //       this.arr2storing['bookPublisher'] = this.arr2['items'][i]['volumeInfo']['publisher']
    //       this.arr2storing['bookPublishedDate'] = this.arr2['items'][i]['volumeInfo']['publishedDate'];
    //       //this.string1 = this.arr2['items'][i]['volumeInfo']['description'];
    //       //console.log(this.string1.length);


    //       this.arr2storing['bookDescription'] = this.arr2['items'][i]['volumeInfo']['description'];
    //       if(this.arr2['items'][i]['volumeInfo']['categories'][0]!==undefined)
    //       {
    //         this.arr2storing['bookCategory'] = this.arr2['items'][i]['volumeInfo']['categories'][0];
    //       }

    //       this.arr2storing['bookImage'] = this.arr2['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr2['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr2storing['bookPrice'] = this.arr2['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr2storing['bookCurrencytCode'] = this.arr2['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr2storing['bookCurrencytCode'] = "-";
    //       }
    //       this.arr2storing['bookLanguage'] = this.arr2['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr2storing['preview']=this.arr2['items'][i]['volumeInfo']['previewLink'];
    //       this.arr2storing['author'] = this.arr2['items'][i]['volumeInfo']['authors'];
    //       this.arr2printing.push(this.arr2storing);
    //       this.arr2storing = [];
    //     }

    //     //console.log(this.arr2printing);

    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.googleApiService.getFictionBook().subscribe(
      data => {

        //console.log(data);
        this.arr2 = data;
        //console.log(this.arr2);

        for (let i = 0; i < this.arr2['items'].length; i++) {
          if (this.arr2['items'][i]['id'] != undefined) {
            this.arr2storing['bookId'] = this.arr2['items'][i]['id'];
          }
          else {
            this.arr2storing['bookId'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr2storing['bookTitle'] = this.arr2['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr2storing['bookTitle'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr2storing['bookPublisher'] = this.arr2['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr2storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr2['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr2['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr2storing['bookPublishedDate'] = this.arr2['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr2storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr2['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr2storing['bookDescription'] = this.arr2['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr2storing['bookDescription'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['categories'] != undefined) {
            this.arr2storing['bookCategory'] = this.arr2['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr2storing['bookCategory'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr2storing['bookImage'] = this.arr2['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr2storing['bookImage'] = "-";
          }

          if (this.arr2['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr2storing['bookPrice'] = this.arr2['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr2storing['bookCurrencytCode'] = this.arr2['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr2storing['bookCurrencytCode'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr2['items'][i]['volumeInfo']['language'] == "en") {
              this.arr2storing['bookLanguage'] = "English";
            }
            if (this.arr2['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr2storing['bookLanguage'] = "French";
            }
            if (this.arr2['items'][i]['volumeInfo']['language'] == "de") {
              this.arr2storing['bookLanguage'] = "German";
            }
            if (this.arr2['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr2storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr2storing['bookLanguage'] = this.arr2['items'][i]['volumeInfo']['language'];
          //
          if (this.arr2['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr2storing['preview'] = this.arr2['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr2storing['preview'] = "-";
          }
          if (this.arr2['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr2storing['author'] = this.arr2['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr2storing['author'] = "-";
          }
          this.arr2printing.push(this.arr2storing);
          this.arr2storing = [];
        }

        //console.log(this.arr2printing);


      },
      error => {
        console.log(error);
      }
    );
    // this.googleApiService.getPhilosophyBooks().subscribe(
    //   data => {

    //     //console.log(data);
    //     this.arr3 = data;
    //     //console.log(this.arr3);


    //     for (let i = 0; i < this.arr3['items'].length; i++) {
    //       this.arr3storing['bookId'] = this.arr3['items'][i]['id'];
    //       this.arr3storing['bookTitle'] = this.arr3['items'][i]['volumeInfo']['title'];
    //       this.arr3storing['bookPublisher'] = this.arr3['items'][i]['volumeInfo']['publisher']
    //       this.arr3storing['bookPublishedDate'] = this.arr3['items'][i]['volumeInfo']['publishedDate'];
    //       this.arr3storing['bookDescription'] = this.arr3['items'][i]['volumeInfo']['description'];
    //       this.arr3storing['bookCategory'] = this.arr3['items'][i]['volumeInfo']['categories'][0];
    //       this.arr3storing['bookImage'] = this.arr3['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr3['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr3storing['bookPrice'] = this.arr3['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr3storing['bookCurrencytCode'] = this.arr3['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr3storing['bookCurrencytCode'] = "-";
    //       }
    //       this.arr3storing['bookLanguage'] = this.arr3['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr3storing['preview']=this.arr3['items'][i]['volumeInfo']['previewLink'];
    //       this.arr3storing['author'] = this.arr3['items'][i]['volumeInfo']['authors'];
    //       this.arr3printing.push(this.arr3storing);
    //       this.arr3storing = [];
    //     }

    //     //console.log(this.arr3printing);


    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.googleApiService.getPhilosophyBooks().subscribe(
      data => {

        //console.log(data);
        this.arr3 = data;
        //console.log(this.arr3);

        for (let i = 0; i < this.arr3['items'].length; i++) {
          if (this.arr3['items'][i]['id'] != undefined) {
            this.arr3storing['bookId'] = this.arr3['items'][i]['id'];
          }
          else {
            this.arr3storing['bookId'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr3storing['bookTitle'] = this.arr3['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr3storing['bookTitle'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr3storing['bookPublisher'] = this.arr3['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr3storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr3['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr3['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr3storing['bookPublishedDate'] = this.arr3['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr3storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr3['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr3storing['bookDescription'] = this.arr3['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr3storing['bookDescription'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['categories']!= undefined) {
            this.arr3storing['bookCategory'] = this.arr3['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr3storing['bookCategory'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr3storing['bookImage'] = this.arr3['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr3storing['bookImage'] = "-";
          }

          if (this.arr3['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr3storing['bookPrice'] = this.arr3['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr3storing['bookCurrencytCode'] = this.arr3['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr3storing['bookCurrencytCode'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr3['items'][i]['volumeInfo']['language'] == "en") {
              this.arr3storing['bookLanguage'] = "English";
            }
            if (this.arr3['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr3storing['bookLanguage'] = "French";
            }
            if (this.arr3['items'][i]['volumeInfo']['language'] == "de") {
              this.arr3storing['bookLanguage'] = "German";
            }
            if (this.arr3['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr3storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr3storing['bookLanguage'] = this.arr3['items'][i]['volumeInfo']['language'];
          //
          if (this.arr3['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr3storing['preview'] = this.arr3['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr3storing['preview'] = "-";
          }
          if (this.arr3['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr3storing['author'] = this.arr3['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr3storing['author'] = "-";
          }
          this.arr3printing.push(this.arr3storing);
          this.arr3storing = [];
        }

        //console.log(this.arr3printing);


      },
      error => {
        console.log(error);
      }
    );
    // this.googleApiService.getHorrorBooks().subscribe(data => {
    //   //console.log(data);
    //   this.arr4 = data;
    //   //console.log(this.arr1);



    //   for (let i = 0; i < this.arr4['items'].length; i++) {
    //     this.arr4storing['bookId'] = this.arr4['items'][i]['id'];
    //     this.arr4storing['bookTitle'] = this.arr4['items'][i]['volumeInfo']['title'];
    //     this.arr4storing['bookPublisher'] = this.arr4['items'][i]['volumeInfo']['publisher']
    //     this.arr4storing['bookPublishedDate'] = this.arr4['items'][i]['volumeInfo']['publishedDate'];
    //     this.arr4storing['bookDescription'] = this.arr4['items'][i]['volumeInfo']['description'];
    //     this.arr4storing['bookCategory'] = this.arr4['items'][i]['volumeInfo']['categories'][0];
    //     this.arr4storing['bookImage'] = this.arr4['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //     if (this.arr4['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //       this.arr4storing['bookPrice'] = this.arr4['items'][i]['volumeInfo']['listPrice']['amount'];
    //       this.arr4storing['bookCurrencytCode'] = this.arr4['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //     }
    //     else {
    //       this.arr4storing['bookCurrencytCode'] = "-";
    //     }
    //     this.arr4storing['bookLanguage'] = this.arr4['items'][i]['volumeInfo']['language'];
    //     //
    //     this.arr4storing['preview']=this.arr4['items'][i]['volumeInfo']['previewLink'];
    //     this.arr4storing['author'] = this.arr4['items'][i]['volumeInfo']['authors'];
    //     this.arr4printing.push(this.arr4storing);
    //     this.arr4storing = [];
    //   }

    //   //console.log(this.arr4printing);



    // },
    //   error => {
    //     console.log(error);
    //   }



    // );
    this.googleApiService.getHorrorBooks().subscribe(
      data => {

        //console.log(data);
        this.arr4 = data;
        //console.log(this.arr4);

        for (let i = 0; i < this.arr4['items'].length; i++) {
          if (this.arr4['items'][i]['id'] != undefined) {
            this.arr4storing['bookId'] = this.arr4['items'][i]['id'];
          }
          else {
            this.arr4storing['bookId'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr4storing['bookTitle'] = this.arr4['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr4storing['bookTitle'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr4storing['bookPublisher'] = this.arr4['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr4storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr4['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr4['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr4storing['bookPublishedDate'] = this.arr4['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr4storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr4['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr4storing['bookDescription'] = this.arr4['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr4storing['bookDescription'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['categories']!= undefined) {
            this.arr4storing['bookCategory'] = this.arr4['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr4storing['bookCategory'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr4storing['bookImage'] = this.arr4['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr4storing['bookImage'] = "-";
          }

          if (this.arr4['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr4storing['bookPrice'] = this.arr4['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr4storing['bookCurrencytCode'] = this.arr4['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr4storing['bookCurrencytCode'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr4['items'][i]['volumeInfo']['language'] == "en") {
              this.arr4storing['bookLanguage'] = "English";
            }
            if (this.arr4['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr4storing['bookLanguage'] = "French";
            }
            if (this.arr4['items'][i]['volumeInfo']['language'] == "de") {
              this.arr4storing['bookLanguage'] = "German";
            }
            if (this.arr4['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr4storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr4storing['bookLanguage'] = this.arr4['items'][i]['volumeInfo']['language'];
          //
          if (this.arr4['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr4storing['preview'] = this.arr4['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr4storing['preview'] = "-";
          }
          if (this.arr4['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr4storing['author'] = this.arr4['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr4storing['author'] = "-";
          }
          this.arr4printing.push(this.arr4storing);
          this.arr4storing = [];
        }

        //console.log(this.arr4printing);


      },
      error => {
        console.log(error);
      }
    );

    // this.googleApiService.getScienceBooks().subscribe(
    //   data => {

    //     //console.log(data);
    //     this.arr15 = data;
    //     //console.log(this.arr1);


    //     for (let i = 0; i < this.arr15['items'].length; i++) {
    //       this.arr15storing['bookId'] = this.arr15['items'][i]['id'];
    //       this.arr15storing['bookTitle'] = this.arr15['items'][i]['volumeInfo']['title'];
    //       this.arr15storing['bookPublisher'] = this.arr15['items'][i]['volumeInfo']['publisher']
    //       this.arr15storing['bookPublishedDate'] = this.arr15['items'][i]['volumeInfo']['publishedDate'];
    //       this.arr15storing['bookDescription'] = this.arr15['items'][i]['volumeInfo']['description'];
    //       this.arr15storing['bookCategory'] = this.arr15['items'][i]['volumeInfo']['categories'][0];
    //       this.arr15storing['bookImage'] = this.arr15['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr15['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr15storing['bookPrice'] = this.arr15['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr15storing['bookCurrencytCode'] = this.arr15['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr15storing['bookCurrencytCode'] = "-";
    //       }

    //       this.arr15storing['bookLanguage'] = this.arr15['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr15storing['preview']=this.arr15['items'][i]['volumeInfo']['previewLink'];
    //       this.arr15storing['author'] = this.arr15['items'][i]['volumeInfo']['authors'];
    //       this.arr15printing.push(this.arr15storing);
    //       this.arr15storing = [];
    //     }

    //     //console.log(this.arr5printing);




    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.googleApiService.getScienceBooks().subscribe(
      data => {

        //console.log(data);
        this.arr15 = data;
        //console.log(this.arr15);

        for (let i = 0; i < this.arr15['items'].length; i++) {
          if (this.arr15['items'][i]['id'] != undefined) {
            this.arr15storing['bookId'] = this.arr15['items'][i]['id'];
          }
          else {
            this.arr15storing['bookId'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr15storing['bookTitle'] = this.arr15['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr15storing['bookTitle'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr15storing['bookPublisher'] = this.arr15['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr15storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr15['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr15['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr15storing['bookPublishedDate'] = this.arr15['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr15storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr15['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr15storing['bookDescription'] = this.arr15['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr15storing['bookDescription'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['categories'] != undefined) {
            this.arr15storing['bookCategory'] = this.arr15['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr15storing['bookCategory'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr15storing['bookImage'] = this.arr15['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr15storing['bookImage'] = "-";
          }

          if (this.arr15['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr15storing['bookPrice'] = this.arr15['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr15storing['bookCurrencytCode'] = this.arr15['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr15storing['bookCurrencytCode'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr15['items'][i]['volumeInfo']['language'] == "en") {
              this.arr15storing['bookLanguage'] = "English";
            }
            if (this.arr15['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr15storing['bookLanguage'] = "French";
            }
            if (this.arr15['items'][i]['volumeInfo']['language'] == "de") {
              this.arr15storing['bookLanguage'] = "German";
            }
            if (this.arr15['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr15storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr15storing['bookLanguage'] = this.arr15['items'][i]['volumeInfo']['language'];
          //
          if (this.arr15['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr15storing['preview'] = this.arr15['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr15storing['preview'] = "-";
          }
          if (this.arr15['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr15storing['author'] = this.arr15['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr15storing['author'] = "-";
          }
          this.arr15printing.push(this.arr15storing);
          this.arr15storing = [];
        }

        //console.log(this.arr15printing);


      },
      error => {
        console.log(error);
      }
    );
    // this.googleApiService.getComedyBooks().subscribe(
    //   data => {

    //     //console.log(data);
    //     //console.log(this.arr1);
    //     this.arr16 = data;


    //     for (let i = 0; i < this.arr16['items'].length; i++) {
    //       this.arr16storing['bookTitle'] = this.arr16['items'][i]['volumeInfo']['title'];
    //       this.arr16storing['bookId'] = this.arr16['items'][i]['id'];
    //       this.arr16storing['bookPublisher'] = this.arr16['items'][i]['volumeInfo']['publisher']
    //       this.arr16storing['bookPublishedDate'] = this.arr16['items'][i]['volumeInfo']['publishedDate'];
    //       this.arr16storing['bookDescription'] = this.arr16['items'][i]['volumeInfo']['description'];
    //       this.arr15storing['bookCategory'] = this.arr16['items'][i]['volumeInfo']['categories'][0];
    //       this.arr16storing['bookImage'] = this.arr16['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr16['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr16storing['bookPrice'] = this.arr16['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr16storing['bookCurrencytCode'] = this.arr16['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr16storing['bookCurrencytCode'] = "-";
    //       }
    //       this.arr16storing['bookLanguage'] = this.arr16['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr16storing['preview']=this.arr16['items'][i]['volumeInfo']['previewLink'];
    //       this.arr16storing['author'] = this.arr16['items'][i]['volumeInfo']['authors'];
    //       this.arr16printing.push(this.arr16storing);
    //       this.arr16storing = [];
    //     }

    //     //console.log(this.arr5printing);




    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.googleApiService.getComedyBooks().subscribe(
      data => {

        //console.log(data);
        this.arr16 = data;
        //console.log(this.arr16);

        for (let i = 0; i < this.arr16['items'].length; i++) {
          if (this.arr16['items'][i]['id'] != undefined) {
            this.arr16storing['bookId'] = this.arr16['items'][i]['id'];
          }
          else {
            this.arr16storing['bookId'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr16storing['bookTitle'] = this.arr16['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr16storing['bookTitle'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr16storing['bookPublisher'] = this.arr16['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr16storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr16['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr16['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr16storing['bookPublishedDate'] = this.arr16['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr16storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr16['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr16storing['bookDescription'] = this.arr16['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr16storing['bookDescription'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['categories']!= undefined) {
            this.arr16storing['bookCategory'] = this.arr16['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr16storing['bookCategory'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr16storing['bookImage'] = this.arr16['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr16storing['bookImage'] = "-";
          }

          if (this.arr16['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr16storing['bookPrice'] = this.arr16['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr16storing['bookCurrencytCode'] = this.arr16['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr16storing['bookCurrencytCode'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr16['items'][i]['volumeInfo']['language'] == "en") {
              this.arr16storing['bookLanguage'] = "English";
            }
            if (this.arr16['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr16storing['bookLanguage'] = "French";
            }
            if (this.arr16['items'][i]['volumeInfo']['language'] == "de") {
              this.arr16storing['bookLanguage'] = "German";
            }
            if (this.arr16['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr16storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr16storing['bookLanguage'] = this.arr16['items'][i]['volumeInfo']['language'];
          //
          if (this.arr16['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr16storing['preview'] = this.arr16['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr16storing['preview'] = "-";
          }
          if (this.arr16['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr16storing['author'] = this.arr16['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr16storing['author'] = "-";
          }
          this.arr16printing.push(this.arr16storing);
          this.arr16storing = [];
        }

        //console.log(this.arr16printing);


      },
      error => {
        console.log(error);
      }
    );
    // this.googleApiService.getArtBooks().subscribe(
    //   data => {

    //     //console.log(data);
    //     //console.log(this.arr1);
    //     this.arr17= data;


    //     for (let i = 0; i < this.arr17['items'].length; i++) {
    //       this.arr17storing['bookTitle'] = this.arr17['items'][i]['volumeInfo']['title'];
    //       this.arr17storing['bookId'] = this.arr17['items'][i]['id'];
    //       this.arr17storing['bookPublisher'] = this.arr17['items'][i]['volumeInfo']['publisher']
    //       this.arr17storing['bookPublishedDate'] = this.arr17['items'][i]['volumeInfo']['publishedDate'];
    //       this.arr17storing['bookDescription'] = this.arr17['items'][i]['volumeInfo']['description'];
    //       this.arr17storing['bookCategory'] = this.arr17['items'][i]['volumeInfo']['categories'][0];
    //       this.arr17storing['bookImage'] = this.arr17['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr17['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr17storing['bookPrice'] = this.arr17['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr17storing['bookCurrencytCode'] = this.arr17['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr17storing['bookCurrencytCode'] = "-";
    //       }
    //       this.arr17storing['bookLanguage'] = this.arr17['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr17storing['preview']=this.arr17['items'][i]['volumeInfo']['previewLink'];
    //       this.arr17storing['author'] = this.arr17['items'][i]['volumeInfo']['authors'];
    //       this.arr17printing.push(this.arr17storing);
    //       this.arr17storing = [];
    //     }

    //     //console.log(this.arr5printing);




    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.googleApiService.getArtBooks().subscribe(
      data => {

        //console.log(data);
        this.arr17 = data;
        //console.log(this.arr17);

        for (let i = 0; i < this.arr17['items'].length; i++) {
          if (this.arr17['items'][i]['id'] != undefined) {
            this.arr17storing['bookId'] = this.arr17['items'][i]['id'];
          }
          else {
            this.arr17storing['bookId'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr17storing['bookTitle'] = this.arr17['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr17storing['bookTitle'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr17storing['bookPublisher'] = this.arr17['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr17storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr17['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr17['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr17storing['bookPublishedDate'] = this.arr17['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr17storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr17['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr17storing['bookDescription'] = this.arr17['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr17storing['bookDescription'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['categories'] != undefined) {
            this.arr17storing['bookCategory'] = this.arr17['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr17storing['bookCategory'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr17storing['bookImage'] = this.arr17['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr17storing['bookImage'] = "-";
          }

          if (this.arr17['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr17storing['bookPrice'] = this.arr17['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr17storing['bookCurrencytCode'] = this.arr17['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr17storing['bookCurrencytCode'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr17['items'][i]['volumeInfo']['language'] == "en") {
              this.arr17storing['bookLanguage'] = "English";
            }
            if (this.arr17['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr17storing['bookLanguage'] = "French";
            }
            if (this.arr17['items'][i]['volumeInfo']['language'] == "de") {
              this.arr17storing['bookLanguage'] = "German";
            }
            if (this.arr17['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr17storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr17storing['bookLanguage'] = this.arr17['items'][i]['volumeInfo']['language'];
          //
          if (this.arr17['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr17storing['preview'] = this.arr17['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr17storing['preview'] = "-";
          }
          if (this.arr17['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr17storing['author'] = this.arr17['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr17storing['author'] = "-";
          }
          this.arr17printing.push(this.arr17storing);
          this.arr17storing = [];
        }

        //console.log(this.arr17printing);


      },
      error => {
        console.log(error);
      }
    );
    // this.googleApiService.getThrillerBooks().subscribe(
    //   data => {

    //     //console.log(data);
    //     this.arr5 = data;
    //     //console.log(this.arr1);


    //     for (let i = 0; i < this.arr5['items'].length; i++) {
    //       this.arr5storing['bookId'] = this.arr5['items'][i]['id'];
    //       this.arr5storing['bookTitle'] = this.arr5['items'][i]['volumeInfo']['title'];
    //       this.arr5storing['bookPublisher'] = this.arr5['items'][i]['volumeInfo']['publisher']
    //       this.arr5storing['bookPublishedDate'] = this.arr5['items'][i]['volumeInfo']['publishedDate'];
    //       this.arr5storing['bookDescription'] = this.arr5['items'][i]['volumeInfo']['description'];
    //       this.arr5storing['bookCategory'] = this.arr5['items'][i]['volumeInfo']['categories'][0];
    //       this.arr5storing['bookImage'] = this.arr5['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
    //       if (this.arr5['items'][i]['volumeInfo']['listPrice'] != undefined) {
    //         this.arr5storing['bookPrice'] = this.arr5['items'][i]['volumeInfo']['listPrice']['amount'];
    //         this.arr5storing['bookCurrencytCode'] = this.arr5['items'][i]['volumeInfo']['listPrice']['currencyCode'];
    //       }
    //       else {
    //         this.arr5storing['bookCurrencytCode'] = "-";
    //       }
    //       this.arr5storing['bookLanguage'] = this.arr5['items'][i]['volumeInfo']['language'];
    //       //
    //       this.arr5storing['preview']=this.arr5['items'][i]['volumeInfo']['previewLink'];
    //       this.arr5storing['author'] = this.arr5['items'][i]['volumeInfo']['authors'];
    //       this.arr5printing.push(this.arr5storing);
    //       this.arr5storing = [];
    //     }

    //     //console.log(this.arr5printing);




    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    this.googleApiService.getThrillerBooks().subscribe(
      data => {

        //console.log(data);
        this.arr5 = data;
        //console.log(this.arr15);

        for (let i = 0; i < this.arr5['items'].length; i++) {
          if (this.arr5['items'][i]['id'] != undefined) {
            this.arr5storing['bookId'] = this.arr5['items'][i]['id'];
          }
          else {
            this.arr5storing['bookId'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['title'] != undefined) {
            this.arr5storing['bookTitle'] = this.arr5['items'][i]['volumeInfo']['title'];

          }
          else {
            this.arr5storing['bookTitle'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['publisher'] != undefined) {
            this.arr5storing['bookPublisher'] = this.arr5['items'][i]['volumeInfo']['publisher'];
          }
          else {
            this.arr5storing['bookPublisher'] = "-";
          }

          //  this.d=new Date(this.arr5['items'][i]['volumeInfo']['publishedDate']);
          //  //console.log(this.d);
          //  //this.datefinal=this.d.getDate();
          //  //console.log(this.d.getDate());
          //  this.date.push(this.d.getDate());
          //  //console.log(this.d.getUTCMonth()+1);
          //  this.date.push(this.d.getUTCMonth()+1);
          //  //console.log(this.d.getFullYear());
          //   this.date.push(this.d.getFullYear());
          //   console.log(this.date);


          if (this.arr5['items'][i]['volumeInfo']['publishedDate'] != undefined) {
            this.arr5storing['bookPublishedDate'] = this.arr5['items'][i]['volumeInfo']['publishedDate'];
          }
          else {
            this.arr5storing['bookPublishedDate'] = "-";
          }
          // this.date=[];
          if (this.arr5['items'][i]['volumeInfo']['description'] != undefined) {
            this.arr5storing['bookDescription'] = this.arr5['items'][i]['volumeInfo']['description'];
          }
          else {
            this.arr5storing['bookDescription'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['categories'] != undefined) {
            this.arr5storing['bookCategory'] = this.arr5['items'][i]['volumeInfo']['categories'][0];
          }
          else {
            this.arr5storing['bookCategory'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
            this.arr5storing['bookImage'] = this.arr5['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
          }
          else {
            this.arr5storing['bookImage'] = "-";
          }

          if (this.arr5['items'][i]['volumeInfo']['listPrice'] != undefined) {
            this.arr5storing['bookPrice'] = this.arr5['items'][i]['volumeInfo']['listPrice']['amount'];
            this.arr5storing['bookCurrencytCode'] = this.arr5['items'][i]['volumeInfo']['listPrice']['currencyCode'];
          }
          else {
            this.arr5storing['bookCurrencytCode'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['language'] != undefined) {
            if (this.arr5['items'][i]['volumeInfo']['language'] == "en") {
              this.arr5storing['bookLanguage'] = "English";
            }
            if (this.arr5['items'][i]['volumeInfo']['language'] == "fr") {
              this.arr5storing['bookLanguage'] = "French";
            }
            if (this.arr5['items'][i]['volumeInfo']['language'] == "de") {
              this.arr5storing['bookLanguage'] = "German";
            }
            if (this.arr5['items'][i]['volumeInfo']['language'] == "ms") {
              this.arr5storing['bookLanguage'] = "Malaysian";
            }
          }
          // this.arr5storing['bookLanguage'] = this.arr5['items'][i]['volumeInfo']['language'];
          //
          if (this.arr5['items'][i]['volumeInfo']['previewLink'] != undefined) {
            this.arr5storing['preview'] = this.arr5['items'][i]['volumeInfo']['previewLink'];
          }
          else {
            this.arr5storing['preview'] = "-";
          }
          if (this.arr5['items'][i]['volumeInfo']['authors'] != undefined) {
            this.arr5storing['author'] = this.arr5['items'][i]['volumeInfo']['authors'];
          }
          else {
            this.arr5storing['author'] = "-";
          }
          this.arr5printing.push(this.arr5storing);
          this.arr5storing = [];
        }

        //console.log(this.arr5printing);


      },
      error => {
        console.log(error);
      }
    );
    this.googleApiService.getAllBooks().subscribe(data => {


      this.arr10 = data;
      for (let i = 0; i < this.arr10['items'].length; i++) {
        if (this.arr10['items'][i]['id'] != undefined) {
          this.arr10storing['bookId'] = this.arr10['items'][i]['id'];
        }
        else {
          this.arr10storing['bookId'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['title'] != undefined) {
          this.arr10storing['bookTitle'] = this.arr10['items'][i]['volumeInfo']['title'];

        }
        else {
          this.arr10storing['bookTitle'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['publisher'] != undefined) {
          this.arr10storing['bookPublisher'] = this.arr10['items'][i]['volumeInfo']['publisher'];
        }
        else {
          this.arr10storing['bookPublisher'] = "-";
        }

        //  this.d=new Date(this.arr10['items'][i]['volumeInfo']['publishedDate']);
        //  //console.log(this.d);
        //  //this.datefinal=this.d.getDate();
        //  //console.log(this.d.getDate());
        //  this.date.push(this.d.getDate());
        //  //console.log(this.d.getUTCMonth()+1);
        //  this.date.push(this.d.getUTCMonth()+1);
        //  //console.log(this.d.getFullYear());
        //   this.date.push(this.d.getFullYear());
        //   console.log(this.date);


        if (this.arr10['items'][i]['volumeInfo']['publishedDate'] != undefined) {
          this.arr10storing['bookPublishedDate'] = this.arr10['items'][i]['volumeInfo']['publishedDate'];
        }
        else {
          this.arr10storing['bookPublishedDate'] = "-";
        }
        // this.date=[];
        if (this.arr10['items'][i]['volumeInfo']['description'] != undefined) {
          this.arr10storing['bookDescription'] = this.arr10['items'][i]['volumeInfo']['description'];
        }
        else {
          this.arr10storing['bookDescription'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['categories']!= undefined) {
          this.arr10storing['bookCategory'] = this.arr10['items'][i]['volumeInfo']['categories'][0];
        }
        else {
          this.arr10storing['bookCategory'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['imageLinks']['thumbnail']) {
          this.arr10storing['bookImage'] = this.arr10['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
        }
        else {
          this.arr10storing['bookImage'] = "-";
        }

        if (this.arr10['items'][i]['volumeInfo']['listPrice'] != undefined) {
          this.arr10storing['bookPrice'] = this.arr10['items'][i]['volumeInfo']['listPrice']['amount'];
          this.arr10storing['bookCurrencytCode'] = this.arr10['items'][i]['volumeInfo']['listPrice']['currencyCode'];
        }
        else {
          this.arr10storing['bookCurrencytCode'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['language'] != undefined) {
          if (this.arr10['items'][i]['volumeInfo']['language'] == "en") {
            this.arr10storing['bookLanguage'] = "English";
          }
          if (this.arr10['items'][i]['volumeInfo']['language'] == "fr") {
            this.arr10storing['bookLanguage'] = "French";
          }
          if (this.arr10['items'][i]['volumeInfo']['language'] == "de") {
            this.arr10storing['bookLanguage'] = "German";
          }
          if (this.arr10['items'][i]['volumeInfo']['language'] == "ms") {
            this.arr10storing['bookLanguage'] = "Malaysian";
          }
        }
        // this.arr10storing['bookLanguage'] = this.arr10['items'][i]['volumeInfo']['language'];
        //
        if (this.arr10['items'][i]['volumeInfo']['previewLink'] != undefined) {
          this.arr10storing['preview'] = this.arr10['items'][i]['volumeInfo']['previewLink'];
        }
        else {
          this.arr10storing['preview'] = "-";
        }
        if (this.arr10['items'][i]['volumeInfo']['authors'] != undefined) {
          this.arr10storing['author'] = this.arr10['items'][i]['volumeInfo']['authors'];
        }
        else {
          this.arr10storing['author'] = "-";
        }
        this.arr10printing.push(this.arr10storing);
        this.arr10storing = [];
      }
      // console.log(this.arr11);
      // //this.arr6['value']=this.arr1['items'][i]['volumeInfo']['averageRating']

      // for (let i = 0; i < this.arr11['items'].length; i++) {



      //     this.arr12['key'] = this.arr11['items'][i];
      //     this.arr12['value'] = this.arr11['items'][i]['volumeInfo']['publishedDate'];
      //     this.arr13.push(this.arr12);

      //   this.arr12 = [];
      // }

      // console.log(this.arr13);
      // this.arr13.sort(this.compare);
      // console.log(this.arr13);
      // this.arr14 = this.arr13.reverse();
      // console.log(this.arr14);

    }, error => { });

    this.googleApiService.getAllBooks().subscribe(data => {


      this.arr6 = data;
      //console.log(this.arr6);
      //this.arr6['value']=this.arr1['items'][i]['volumeInfo']['averageRating']

      for (let i = 0; i < this.arr6['items'].length; i++) {


        if (isNaN(this.arr6['items'][i]['volumeInfo']['averageRating']) == false) {
          this.arr7['key'] = this.arr6['items'][i];
          this.arr7['value'] = this.arr6['items'][i]['volumeInfo']['averageRating'];
          this.arr8.push(this.arr7);
        }
        this.arr7 = [];
      }
      // console.log(this.arr8);
      this.arr8.sort(this.compare);
      //console.log(this.arr8);
      this.arr9 = this.arr8.reverse();
      //console.log(this.arr9);

    }, error => { });
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.value;
    const bandB = b.value;

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
}

