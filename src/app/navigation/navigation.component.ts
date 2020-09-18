import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isUser = false;
  isAdmin = false;
  isLogin = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.isAdmin = JSON.parse(localStorage.getItem('isadmin'));
    this.isUser = JSON.parse(localStorage.getItem('isuser'));
    if(this.isAdmin == null)
    {
      this.isAdmin = false;
    }
    if(this.isUser == null)
    {
      this.isUser = false;
    }
    this.isLogin = JSON.parse(localStorage.getItem('islogin'));
  }
  logout(){
    localStorage.clear();
    this.isUser = false;
    this.isAdmin = false;
    this.isLogin = false;
    this.router.navigate(['/Home']);
  }
}
