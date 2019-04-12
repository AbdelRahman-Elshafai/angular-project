import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, ControlValueAccessor } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 errorMessage:string="";
  public profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
   
  });
  constructor(private stream: LoginService,private router: Router) { 
   
  }
 user:User={
  userName:'',
  password:'',
  loggedIn:0
 };
  ngOnInit() {
  }
  onSubmit() 
  {

    if(this.profileForm.status=="VALID")
    {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      if(this.user)
      {
        if(this.user.userName !=this.profileForm.value['userName'] || this.user.password !=this.profileForm.value['password'] )
        {
          this.errorMessage="Invalid  UserName or Password";
        }
        else
        { 
          
          this.user.loggedIn=1;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          window.location.reload();
          this.router.navigate([""]);
        } 
        }
     else{
      this.errorMessage="You must Register first";
     }
   }
  }
}
