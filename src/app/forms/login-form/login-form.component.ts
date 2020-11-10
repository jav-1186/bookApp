import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: {userName, password} = {userName: '', password: ''};

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginAttempt(): void{
    console.log(this.user);
    this.user = {userName: '', password: ''};
  }

  login(): void{
    this.auth.login();
  }

  logout(): void{
    this.auth.logout();
  }
}
