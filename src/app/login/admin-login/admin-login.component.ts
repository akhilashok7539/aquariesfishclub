import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/_models/login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginmodel: Login;
  adminlogin: any;
  error: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
    this.loginmodel = new Login();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobNo: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.loginForm.valid) {

      let req = {
        "mobileNumber": this.loginmodel.mobNo,
        "password": this.loginmodel.password
      }
      this.loginService.adminlogin(req).subscribe(
        data => {
          this.adminlogin = data['responce'];
          localStorage.setItem('adminlogin', JSON.stringify(this.adminlogin));
          localStorage.setItem('isadmin', JSON.stringify(true));
          localStorage.setItem('islogin', JSON.stringify(true));

          this.router.navigate(['/adminpannel']);
        },
        error => {
          this.error = error.error;
          console.log(this.error.responce)
          alert(this.error.responce)
        }
      )
    }
  }

}
