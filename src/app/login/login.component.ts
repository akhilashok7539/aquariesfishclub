import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from '../_models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;
  public loginmodel:Login;
  userLogin: any;
  error: any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService:LoginService) {
      this.loginmodel =new Login();
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password: ['', Validators.required]
      });
  }
  login(){
    if(this.loginForm.valid)
    {

    let req = {
      "emailId":this.loginmodel.email,
      "password":this.loginmodel.password
    }
    this.loginService.userLogin(req).subscribe(
      data =>{
        this.userLogin = data['responce'];
        localStorage.setItem('userlogin',JSON.stringify(this.userLogin));
        localStorage.setItem('isuser',JSON.stringify(true));
        localStorage.setItem('islogin',JSON.stringify(true));
        this.router.navigate(['/Home']);
      },
      error =>{
        this.error = error.error;
        console.log(this.error.responce)
        alert(this.error.responce)
      }
    )
  }

  }
  register()
  {
    this.router.navigate(['/register'])
  }
}
