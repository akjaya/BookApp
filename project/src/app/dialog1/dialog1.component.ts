import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {
  flag:boolean;
  constructor(public dialogRef:MatDialogRef<Dialog1Component>,
    @Inject (MAT_DIALOG_DATA) public data:any
    ) { }
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
  }
}