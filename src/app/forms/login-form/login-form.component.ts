import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: {userName, password} = {userName: '', password: ''};
  newUser: {fullName, email, regPassword} = {fullName: '', email: '', regPassword: ''};

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

  onRegisterSubmit(): void{
    // How I plan to create users via email password
    // this.auth.registerUser(this.newUser);

    console.log('Submit occured: ');
    console.log(this.newUser.fullName + ' ' + this.newUser.email + ' ' + this.newUser.regPassword);
  }
}
