import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';
import { SearchComponent } from '../search/search.component';
import { InternalService } from '../internal.service';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
mypic:String;
flag:boolean;
arr1: Array<any> = [];
booksearch: FormGroup;
  title: FormControl;
  arr1storing: Array<any> = [];
  arr1printing: Array<any> = [];
  constructor(private googleApiService:GoogleApisService,private routerService: RouterserviceService,private s:SearchComponent,
    private internalService:InternalService) { }

  ngOnInit() {
    let username=sessionStorage.getItem('key');
    if(sessionStorage.getItem('key')!=null)
    {
      this.flag=false;

    }
   else
   {
     this.flag=true;
   }
    console.log(this.flag);
    this.mypic = localStorage.getItem("x");
    this.title = new FormControl('', Validators.required);
    this.booksearch = new FormGroup({
      title: this.title
    });
  }

login()
{
  this.routerService.tologin();
}
register()
{
  this.routerService.toregister();
}
fav()
{
  this.routerService.tofavourites();
}
home()
{
  this.routerService.tohome();
}
author()
{
  this.routerService.toauthor();
}
rec()
{
  this.routerService.torecommendations();
}
  signout()
  {
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('x');
    this.ngOnInit();
    this.routerService.tohome();
  }
// search*************
search() {
  this.arr1printing = [];
  //this.routerService.tosearch();
  console.log("search");
  this.googleApiService.getDetails(this.booksearch.value).subscribe(
    data => {
      this.arr1 = data;
      for (let i = 0; i < this.arr1['items'].length; i++) {
        this.arr1storing['bookId'] = this.arr1['items'][i]['id'];
        this.arr1storing['bookTitle'] = this.arr1['items'][i]['volumeInfo']['title'];
        this.arr1storing['bookPublisher'] = this.arr1['items'][i]['volumeInfo']['publisher']
        this.arr1storing['bookPublishedDate'] = this.arr1['items'][i]['volumeInfo']['publishedDate'];
        this.arr1storing['bookDescription'] = this.arr1['items'][i]['volumeInfo']['description'];
        if (this.arr1['items'][i]['volumeInfo']['categories'] != undefined) {
          this.arr1storing['bookCategory'] = this.arr1['items'][i]['volumeInfo']['categories'][0];
        }
        if(this.arr1['items'][i]['volumeInfo']['imageLinks']!=undefined)
        {
          this.arr1storing['bookImage'] = this.arr1['items'][i]['volumeInfo']['imageLinks']['thumbnail'];
        }
        else
        {
          this.arr1storing['bookImage'] = '-';
        }
        
        if (this.arr1['items'][i]['volumeInfo']['listPrice'] != undefined) {
          this.arr1storing['bookPrice'] = this.arr1['items'][i]['volumeInfo']['listPrice']['amount'];
          this.arr1storing['bookCurrencytCode'] = this.arr1['items'][i]['volumeInfo']['listPrice']['currencyCode'];
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
        //
        this.arr1storing['author'] = this.arr1['items'][i]['volumeInfo']['authors'];
        this.arr1printing.push(this.arr1storing);
        this.arr1storing = [];
      }
      console.log(this.arr1printing);
      this.internalService.setArray(this.arr1printing);
       
      // this.s.search1(this.booksearch.value);
       this.routerService.tosearch();
       this.s.search1(this.booksearch.value);
       
       
      
      
    }
  )
}
}
