import { AuthService } from '../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: { userName, password } = { userName: '', password: '' };
  newUser: { fullName, userName, password } = { fullName: '', userName: '', password: '' };
  loggedIn = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


  loginAttempt(): void {
    this.basicLogin(this.user);
    console.log('Service value: ' + this.auth.isLoggedIn());
  }

  login(): void {
    this.auth.login();
    console.log('Service value: ' + this.auth.isLoggedIn());
  }

  logout(): void {
    this.auth.logout();
    this.loggedIn = false;
  }

  onRegisterSubmit(): void {
    this.loggedIn = this.auth.registerUser(this.newUser);
    this.clear();
  }

  private clear(): void {
    this.user = { userName: '', password: '' };
    this.newUser = { fullName: '', userName: '', password: '' };
  }

  private basicLogin(basicUser): void{
    this.auth.basicLogin(basicUser);
    this.clear();
  }
}
