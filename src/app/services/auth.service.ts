import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: Observable<firebase.User>;

  constructor(private auth: AngularFireAuth) {
    this.user = auth.authState;
  }


  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function(result) {sessionStorage.setItem('loggedIn', '1');
      });
  }

  basicLogin(user): void{
    this.auth.signInWithEmailAndPassword(user.userName, user.password)
    .then(function(result) {sessionStorage.setItem('loggedIn', '1')});
  }

  logout() {
    this.auth.signOut()
      .then(function(result) { sessionStorage.removeItem('loggedIn'); });
  }

  isLoggedIn(): boolean {
    var loggedIn = sessionStorage.getItem('loggedIn');
    return (loggedIn != null);
  }

  registerUser(newUser): void {
    this.auth.createUserWithEmailAndPassword(newUser.userName, newUser.password);
    console.log('Wow we created a new user!');
  }

}

