import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { RouterserviceService } from '../routerservice.service';
import { register } from '../register';
import { login } from '../login';
import { InternalService } from '../internal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: register = new register();
  reg:register = new register();
  lg:login = new login();
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;
  repeatpassword:FormControl;
  ssessionusername: string;
  submitMessage: string;
  pic:string;
  obj:any;
  flag:boolean=false;
  constructor(private authservice: AuthenticationService, private routerservice: RouterserviceService,private internalService:InternalService) { }
  register() {
    this.routerservice.toregister();
  }
  edit() {
    this.routerservice.toedit();
  }
  ngOnInit() {
    if (sessionStorage.getItem('key') != null) {
      this.routerservice.tohome();
    }
    else {
      this.username = new FormControl('', Validators.required),
        this.password = new FormControl('', Validators.required),
        this.repeatpassword=new FormControl('',Validators.required)
        this.loginform = new FormGroup({
        username: this.username,
        password: this.password,
        repeatpassword:this.repeatpassword
      });
    }
  }
  loginSubmit() {
    
    this.login.username = this.loginform.value.username;
    this.login.password = this.loginform.value.password;
    this.login.repeatpassword = this.loginform.value.repeatpassword;
    this.submitMessage = this.loginform.value.username;
    console.log("Login Submit: " + this.loginform.value);
        this.authservice.getusers(this.loginform.value).subscribe((data) => {
          this.authservice.setBearerToken(data['token']);
          console.log(data);
          // var parsedJson: any = JSON.parse(data);
          // console.log(parsedJson);
           this.pic = data['image'];
          localStorage.setItem("x" , this.pic);
          if (data != null) {
            sessionStorage.setItem("key",this.submitMessage);
            this.flag=true;
            this.internalService.setFlag(false);
            this.routerservice.tohome();
          }
        }
        ,
          error => {
            console.log("error")
            alert('You have entered incorrect Username or Password!')
          });
        }
// }
}
