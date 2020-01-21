import { FormBuilder } from '@angular/forms';

export class register
{
    password:string;
    username:string;
    name: string;
    image:any;
    genre:any;
  repeatpassword: any;
    constructor(){
        this.username='';
        this.password='';
        this.name='';
        this.image='';
        this.genre=''
        this.repeatpassword='';
    }

    
}