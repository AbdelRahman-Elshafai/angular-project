import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
//import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user:User={
    userName:"",
    password:"",
    loggedIn:0
  };
 
  constructor() {
    
   }
  
  getUser() {
    if(JSON.parse(localStorage.getItem('currentUser')))
    {
      return  JSON.parse(localStorage.getItem('currentUser'));
    }else
    {
      return this.user;
    }
    //return this.currentuser.asObservable();
  }
}
