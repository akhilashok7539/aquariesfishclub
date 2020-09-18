import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registeruser } from '../_models/register';
import { LoginService } from '../login/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ReportsComponent } from '../adminpannel/reports/reports.component';
import { AdminpannelhomeComponent } from '../adminpannel/adminpannelhome/adminpannelhome.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  results:any = [];
  public registerModel: Registeruser;
  constructor(private formBuilder: FormBuilder,
    private router: Router,public dialog: MatDialog, 
    private loginService: LoginService) {

  }
  ngOnInit() {
    this.getall();
  }

  getall() {
    
    this.loginService.getallfish().subscribe(
      data =>{
        console.log(data)
        this.results= data;
      },  
      error =>{

      }
    )
  }
  viewmore(s){
    const dialogRef = this.dialog.open(ReportsComponent, {
      data: s,
      height: '480px',
      // width: '400px',

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  booknow(e)
  {
    const dialogRef = this.dialog.open(AdminpannelhomeComponent, {
      data: e,
      height: '480px',
      // width: '400px',

    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
