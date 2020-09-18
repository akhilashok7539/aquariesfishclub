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
    let link = "https://api.whatsapp.com/send?phone=+918086362942&text="+this.textarea;

    window.location.assign(link);
  }
  close(){
    this.dialog.closeAll();
  }
}
