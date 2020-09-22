import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adminpannelhome',
  templateUrl: './adminpannelhome.component.html',
  styleUrls: ['./adminpannelhome.component.css']
})
export class AdminpannelhomeComponent implements OnInit {

  results: any;
  imgurl: any;
  name: any;
  description: any;
  textarea:any
   messagecustom:any;
  constructor(@Inject(MAT_DIALOG_DATA) data,public dialog: MatDialog,
  private dialogRef: MatDialogRef<AdminpannelhomeComponent>) 
  { 
    console.log(data)
    this.name = data['fishName'];
    // this.name = data['fishName'];
    // this.description = data['descriptionsmall'];


  }
  ngOnInit() {
  }
  book(){
    this.messagecustom = "Hi Aquarius,I Need to know the details and availability of" + this.name + " & "+this.textarea;
    let link = "https://api.whatsapp.com/send?phone=+918590746072&text="+this.messagecustom;

    window.location.assign(link);
  }
  close(){
    this.dialog.closeAll();
  }
}
