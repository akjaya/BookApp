import { Component, OnInit } from '@angular/core';
import { edit } from '../edit';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterserviceService } from '../routerservice.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit: edit = new edit();
  editArray: Array<edit> = [];

  editform: FormGroup;
  oldpassword: FormControl;
  newpassword: FormControl;

  constructor(private authenticateService :AuthenticationService,private routerService :RouterserviceService) {}
 

  ngOnInit() {
    this.oldpassword = new FormControl('', Validators.required),
    this.newpassword = new FormControl('', Validators.required)
    this. editform= new FormGroup({
      oldpassword: this.oldpassword,
      newpassword : this.newpassword
    });

  }

  // editSubmit()
  // {
  //   console.log(this.editform.value.oldpassword);
  //   console.log(this.editform.value.newpassword);

  //   this.edit.oldpassword=this.editform.value.oldpassword;
  //   this.edit.newpassword=this.editform.value.newpassword;

  //   //this.authenticateService.editUser(id).subscribe((data) => {
  //   this.authenticateService.editUser(id).subscribe((data) => {


  //     this.routerService.tologin();
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }


}
