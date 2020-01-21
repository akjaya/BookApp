import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { InternalService } from '../internal.service';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
username:string;
arr1: Array<any> = [];
arr1storing: Array<any> = [];
  arr1printing: Array<any> = [];
  deleteindex: any;
  constructor(private routerService:RouterserviceService ,private googleApiService:GoogleApisService,private interService:InternalService) { }

  ngOnInit() {
    if(sessionStorage.getItem('key')==null)
    {
      this.routerService.tohome();
    }
    else
    {
    this.username=sessionStorage.getItem('key');

    this.interService.getFavouriteBooks(this.username).subscribe(data=>{

      this.arr1=data;
      //console.log(data);
      if(data==null)
      {
        alert("Add to your favourite list and it will apeear here")
      }
      else
      {
      for (let i = 0; i < data.length; i++) {
        this.arr1storing['bookId'] = this.arr1[i]['bookId'];
        this.arr1storing['username']=this.arr1[i]['username'];
        this.arr1storing['bookTitle'] = this.arr1[i]['bookTitle'];
        this.arr1storing['bookPublisher'] = this.arr1[i]['bookPublisher'];
        this.arr1storing['bookPublishedDate'] = this.arr1[i]['bookPublishedDate'];
        this.arr1storing['bookDescription'] = this.arr1[i]['bookDescription'];
        this.arr1storing['bookCategory'] = this.arr1[i]['bookCategory'];
        this.arr1storing['bookImage'] = this.arr1[i]['bookImage'];
        this.arr1storing['id']=this.arr1[i]['id'];
          this.arr1storing['bookPrice'] = this.arr1[i]['bookPrice'];
          this.arr1storing['bookCurrencytCode'] = this.arr1[i]['bookCurrencytCode'];
        
        this.arr1storing['bookLanguage'] = this.arr1[i]['bookLanguage'];
        //
        this.arr1storing['author'] = this.arr1[i]['bookAuthors'];
        this.arr1printing.push(this.arr1storing);
        this.arr1storing = [];
      }
    }
      //console.log(this.arr1printing);

    },
    
    error=>{

      console.log(error);
    }
    
    );
  }
    
  }

  deleteFromFavourites(id,bookId,username)

  {
    //console.log(id);
    console.log(bookId);
     
    // this.deleteindex = this.arr1.findIndex(ep => ep.res_id === bookId);

    // console.log(this.deleteindex);
    //  this.arr1.splice(this.deleteindex, 1);
    this.interService.deleteFromFavourites(bookId,username).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
    },
      error => {
        console.log(error);

      });
      

  }

}
