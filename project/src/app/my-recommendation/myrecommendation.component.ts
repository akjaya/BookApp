import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { RouterserviceService } from '../routerservice.service';
import {book} from '../book';
import { InternalService } from '../internal.service';
@Component({
  selector: 'app-myrecommendation',
  templateUrl: './myrecommendation.component.html',
  styleUrls: ['./myrecommendation.component.css']
})
export class MyrecommendationComponent implements OnInit {

username:string;
result:Array<any>=[];
arr1:Array<any>=[];
arr2:Array<any>=[];
i:number;

//variables
  bookId:string;
  bookTitle:string;
  bookAuthors:string[];
  bookPublisher:string;
  bookPublishedDate:string;
  bookDescription:string;
  bookCategory:string;
  bookImage:any;
  bookPrice:string;
  bookLanguage:string;
  bookCurrencytCode:string;

  constructor(private googleserv:GoogleApisService, private routerService: RouterserviceService,
    private inetrnalService:InternalService) { }

  ngOnInit() {
    if(sessionStorage.getItem("key") !== null)
    {
      this.username=sessionStorage.getItem("key");
      console.log(this.username);
      this.inetrnalService.getBookforRecom(this.username).subscribe(
        data =>{
          this.result=data;
          //console.log(data.length);
          console.log(data);
          if(data==null)
          {
            alert("Add your recommendated books and it will apeear here");
          }
          else
          {
          for(this.i=0;this.i<data.length;this.i++)
          {
            this.arr1['bookId']=this.result[this.i]['bookId'];
            this.arr1['bookTitle']=this.result[this.i]['bookTitle'];
            this.arr1['bookImage']=this.result[this.i]['bookImage'];
            this.arr1['bookDescription']=this.result[this.i]['bookDescription'];
            this.arr1['bookPublisher']=this.result[this.i]['bookPublisher'];
            this.arr1['bookPublishedDate']=this.result[this.i]['bookPublishedDate'];
            this.arr1['bookCategory']=this.result[this.i]['bookCategory'];
            this.arr1['bookPrice']=this.result[this.i]['bookPrice'];
            this.arr1['bookLanguage']=this.result[this.i]['bookLanguage'];
            this.arr1['bookCurrencytCode']=this.result[this.i]['bookCurrencytCode'];
            //this.arr1['username']=this.result[this.i]['username'];
            
            this.arr2.push(this.arr1);
            this.arr1=[];
            console.log(this.arr2);
          }
        }
        },
        error =>
          {
            console.log("error");
          }
      );
    }
    else{
      this.routerService.tosearch();
    }
  }
  unrecommend(bookId)
  {
    console.log(bookId);
    this.username = sessionStorage.getItem('key');
    console.log(this.username);
    
    this.inetrnalService.unrecommend(bookId,this.username).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
  },
    error => {
      console.log(error);

    });

  }
  
}
