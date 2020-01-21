import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InternalService } from '../internal.service';
import { RouterserviceService } from '../routerservice.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  flag2:boolean;
  constructor(public dialogRef:MatDialogRef<DialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data:any,private internalService:InternalService,
    private routerService:RouterserviceService
    ) { }
  ngOnInit() {
    let username=sessionStorage.getItem('key');
    if(sessionStorage.getItem('key')!=null)
    {
      this.flag2=false;

    }
   else
   {
     this.flag2=true;
   }

  }

  comment(id)
  {
    this.internalService.setId(id);
    this.routerService.tobookDetails();

  }
}