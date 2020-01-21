import { Component, OnInit } from '@angular/core';
import { GoogleApisService } from '../google-apis.service';
import { InternalService } from '../internal.service';
import { RouterserviceService } from '../routerservice.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  result:Array<any>=[];
  arr1:Array<Array<string>>=[];
  arr2:Array<any>=[];
  arr3:Array<any>=[];
  arr4:Array<any>=[];
  arr5:Array<any>=[];
  arr6:Array<any>=[];
  usernames:Array<any>=[];
  i:number;
  j:number;
  k:number;
  m:number;
  constructor(private routerService:RouterserviceService ,private googleApiService:GoogleApisService,private internalService:InternalService) { }

  ngOnInit() {
    if(sessionStorage.getItem('key')==null)
    {
      this.routerService.tohome();
    }
    else
    {

    this.internalService.getRecommendedBook().subscribe(
      data =>{
        this.result=data;
        console.log(data.length);
        console.log(this.result);
        for(this.i=0;this.i<this.result.length;this.i++)
        {
          this.arr3.push(this.result[this.i]['bookId']);
        }
        console.log(this.arr3);
        for(this.j=0;this.j<this.arr3.length;this.j++)
        {
            if(this.arr4.indexOf(this.arr3[this.j])==-1)
            {
                this.arr4.push(this.arr3[this.j]);
            }
        }
        console.log("arr4");
        console.log(this.arr4);
        
        for(this.m=0;this.m<this.arr4.length;this.m++)
        {
          this.arr1.push([]);
        }
        for(this.k=0;this.k<this.result.length;this.k++)
        {
            for(this.m=0;this.m<this.arr4.length;this.m++)
            {
              console.log(this.m);
              console.log(this.k);

              if((this.result[this.k]['bookId'])==this.arr4[this.m])
              {
                console.log(this.result[this.k]['username']);
                
                this.arr1[this.m].push(this.result[this.k]['username']);
              }
              
              
              
            }
            
            this.usernames=[];
            //console.log(this.usernames);
          //console.log(this.arr2);
        }

        //console.log(this.usernames);
        console.log(this.arr1);


        for(this.m=0;this.m<this.arr4.length;this.m++){



          for(let s=0;s<this.result.length;s++)
          {
          if(this.arr4[this.m]==this.result[s]['bookId'])
          {
            this.arr5['bookId']=this.result[s]['bookId'];
          this.arr5['bookTitle']=this.result[s]['bookTitle'];
          this.arr5['bookDescription']=this.result[s]['bookDescription'];
          this.arr5['bookPublisher']=this.result[s]['bookPublisher'];
          this.arr5['bookImage']=this.result[s]['bookImage'];
          this.arr5['bookPublishedDate']=this.result[s]['bookPublishedDate'];
          this.arr5['bookCategory']=this.result[s]['bookCategory'];
          this.arr5['bookPrice']=this.result[s]['bookPrice'];
          this.arr5['bookLanguage']=this.result[s]['bookLanguage'];
          this.arr5['bookCurrencytCode']=this.result[s]['bookCurrencytCode'];
          this.arr5['username']=this.arr1[this.m];
          this.arr5['length']=this.arr1[this.m].length;
          this.arr6.push(this.arr5);
          this.arr5=[];
          break;
          }
          }
        }
        console.log(this.arr6);
        // for(this.i=0;this.i<data.length;this.i++)
        // {
          


        //   this.arr1['bookId']=this.result[this.i]['bookId'];
        //   this.arr1['bookTitle']=this.result[this.i]['bookTitle'];
        //   this.arr1['bookImage']=this.result[this.i]['bookImage'];
        //   this.arr1['bookDescription']=this.result[this.i]['bookDescription'];
        //   this.arr1['bookPublisher']=this.result[this.i]['bookPublisher'];
        //   this.arr1['bookPublishedDate']=this.result[this.i]['bookPublishedDate'];
        //   this.arr1['bookCategory']=this.result[this.i]['bookCategory'];
        //   this.arr1['bookPrice']=this.result[this.i]['bookPrice'];
        //   this.arr1['bookLanguage']=this.result[this.i]['bookLanguage'];
        //   this.arr1['bookCurrencytCode']=this.result[this.i]['bookCurrencytCode'];
        //   this.arr1['username']=this.result[this.i]['username'];
          
        //   this.arr2.push(this.arr1);
        //   this.arr1=[];
        //   console.log(this.arr2);
        // }
       },
      error =>
        {
          console.log("error");
        }
    );
    
  }
}

}
