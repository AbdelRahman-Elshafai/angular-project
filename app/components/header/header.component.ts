import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user:User={
    userName:"",
    password:"",
    loggedIn:0
  };
  constructor(private router: Router,private stream: LoginService)
 { 
   this.user= this.stream.getUser();
  }

  ngOnInit() {
  }
  changeStatus(){
    this.user.loggedIn=0;
  }
  logout(){
    this.changeStatus();
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.router.navigate([""]);
  }

}
