import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: {userName, password} = {userName: '', password: ''};

  constructor() { }

  ngOnInit(): void {
  }

  loginAttempt(): void{
    console.log(this.user);
    this.user = {userName: '', password: ''};
  }

}
