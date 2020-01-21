import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouterserviceService {

  constructor(private router:Router) { }
  toauthor()
  {
    this.router.navigate(['author'])
  }

  todashboard(){
    this.router.navigate(['dashboard'])
  }

  toedit(){
    this.router.navigate(['edit'])
  }

  tofavourites(){
    this.router.navigate(['favourites'])
  }

  tohome(){
    this.router.navigate(['home'])
  }
    
  tologin()
  {
    this.router.navigate(['login'])
  }
  toregister()
  {
    this.router.navigate(['register'])
  }
  toview()
  {
    this.router.navigate(['view'])
  }
  tosearch()
  {
    this.router.navigate(['search']);
  }

  tomyrecommendation(){
    this.router.navigate(['myrecommendation'])
  }

  torecommendations(){
    this.router.navigate(['recommendations'])
  }

  tobookDetails()

  {
  this.router.navigate(['bookDetails'])
  }

  // tosearch(){
  //   this.router.navigate(['search'])
  // }
  

}
