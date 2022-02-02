import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  url:string='https://investingdelta.herokuapp.com/api/review'
  constructor(private http:HttpClient) {}

  users(){
    return this.http.get(this.url);
  }
  loginuser:any;
  saveuser(data:any){
    this.loginuser = data
    return this.loginuser;
  }
}
