import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { book } from './book';
@Injectable({
  providedIn: 'root'
})
export class GoogleApisService {

  private baseUrl = 'http://localhost:8085/api/bookApp';

  constructor(private httpClient:HttpClient,handler: HttpBackend ) {
    this.httpClient = new HttpClient(handler);
  }

  getAllBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=search&maxResults=40`)
  }

  getDramaBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:drama&maxResults=10`)
  }
  getFictionBook() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=10`)
  }
  getScienceBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:science&maxResults=10`)
  }
  getThrillerBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:thriller&maxResults=10`)
  }
  getArtBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:art&maxResults=10`)
  }
  getComedyBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:comedy&maxResults=10`)
  }
  getPhilosophyBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&maxResults=10`)
  }

  getHorrorBooks() :Observable<any>
   {
    
    return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=subject:horror&maxResults=10`)
  }
//get details of books
getDetails(book) :Observable<any>
{
  console.log("in servuce");
  console.log(book.title);
  return this.httpClient.get<Array<any>>(`https://www.googleapis.com/books/v1/volumes?q=inAuthor=${book.title}&inTitle=${book.title}`)
}
  
  
}
