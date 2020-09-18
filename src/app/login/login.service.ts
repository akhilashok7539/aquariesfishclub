import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string;
  URL = './assets/jsondata/fishlist.json'
  constructor(private http:HttpClient) 
  { 
    this.baseUrl = environment.apiUrl;
  }
  adminlogin(req){
    return this.http.post(this.baseUrl+'admin/login',req);
  }
  userLogin(req)
  {
    return this.http.post(this.baseUrl+'user/login',req);

  }
  userRegister(req)
  {
    return this.http.post(this.baseUrl+'user/signup',req);

  }
  getallfish()
  {
    return this.http.get(this.URL);
  }
}
