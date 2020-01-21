import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { comment } from './comment';
import { book } from './book';
@Injectable({
  providedIn: 'root'
})
export class InternalService {
  flag:boolean=false;
  bookId:string;
  arr:Array<any>;
  input:string;
  private baseUrl = 'http://localhost:8085/api/bookApp';

  constructor(private httpClient: HttpClient) { }

setFlag(flag)
{
  this.flag=flag;
}
getFlag()
{
  return this.flag;
}
  setId(id)
  {
    this.bookId=id;
  }

  getId()
  {
    return this.bookId;
  }

  setArray(arr:Array<any>)

  {
    this.arr=arr;
  }

  getArray()
  {
    return this.arr;
  }
  addComment(comment:comment): Observable<comment>{
    return this.httpClient.post<comment>(`http://localhost:8083/api/bookApp/addComment`,comment);
  }

  getComments(id): Observable<Array<comment>> {
    return this.httpClient.get<Array<comment>>(`http://localhost:8083/api/bookApp/getComments/${id}`);
  }


  getFavouriteBooks(username): Observable<Array<book>> {
    return this.httpClient.get<Array<book>>(`http://localhost:8082/api/bookApp/getFavourites/${username}`);
  }
  deleteFromFavourites(id,username):Observable<book> {
   
    return this.httpClient.delete<book>(`http://localhost:8082/api/bookApp/deleteFromFavourite/${id}/${username}`);
  }
  deleteComment(id):Observable<comment> {
   
    return this.httpClient.delete<comment>(`http://localhost:8083/api/bookApp/deleteComment/${id}`);
  }
  unrecommend(id,username):Observable<book> {
   
    return this.httpClient.delete<book>(`http://localhost:8081/api/bookApp/unrecommend/${id}/${username}`);
  }
  getRecommendedBooksByIdAndUsername(id,username):Observable<book> {
   
    return this.httpClient.get<book>(`http://localhost:8081/api/bookApp/getRecommendedBooksByIdAndUsername/${id}/${username}`);
  }
  getFavouriteBooksByIdAndUsername(id,username):Observable<book> {
   
    return this.httpClient.get<book>(`http://localhost:8082/api/bookApp/getFavouriteBooksByIdAndUsername/${id}/${username}`);
  }
  getRecommendedBook(): Observable<Array<book>> {
  return this.httpClient.get<Array<book>>(`http://localhost:8081/api/bookApp/getAllRecommendedBooks`);
}


//add book to fav list----
addBookToFav(book:book): Observable<book>{
  return this.httpClient.post<book>(`http://localhost:8082/api/bookApp/addToFavourites`,book);
}

//add book to recommended list
addBookToRecom(book:book): Observable<book>{
  return this.httpClient.post<book>(`http://localhost:8081/api/bookApp/addToRecommendedBooks`,book);
}

//fetch data for view my-recommendations
getBookforRecom(username): Observable<Array<book>>{
  return this.httpClient.get<Array<book>>(`http://localhost:8081/api/bookApp/getMyRecommendedBooks/${username}`)
}

setInput(input)
{
  this.input=input;
}
getInput()
{
  return this.input;
}
}
