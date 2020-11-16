import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: { userName, password } = { userName: '', password: '' };
  newUser: { fullName, userName, password } = { fullName: '', userName: '', password: '' };
  loggedIn = false;

  constructor(public auth: AuthService) { }
    login() { this.auth.login(); }
    logout() { this.auth.logout(); }

    loginAttempt(): void {
      this.basicLogin(this.user);
    }

    private clear(): void {
      this.user = { userName: '', password: '' };
      this.newUser = { fullName: '', userName: '', password: '' };
    }

    private basicLogin(basicUser): void{
      this.auth.basicLogin(basicUser);
      this.clear();
    }

  ngOnInit(): void {
  }

}
