import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  authState: any = null;

  constructor(private auth: AngularFireAuth) {
    this.user = auth.authState;
    this.auth.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }

  get isAuthenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.authState.uid : null;
  }

  get userData(): any {
    if (!this.isAuthenticated) {
      return [];
    }
    return [
      {
        id: this.authState.uid,
        displayName: this.authState.displayName,
        email: this.authState.email,
        phoneNumber: this.authState.phoneNumber,
        photoURL: this.authState.photoURL,
      },
    ];
  }

  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        sessionStorage.setItem('loggedIn', '1');
      });
  }

  basicLogin(user): void {
    this.auth
      .signInWithEmailAndPassword(user.userName, user.password)
      .catch((ex) => {
        console.log(ex.code);
      })
      .then(function (result) {
        sessionStorage.setItem('loggedIn', '1');
      });
  }

  logout() {
    this.auth.signOut().then(function (result) {
      sessionStorage.removeItem('loggedIn');
    });
  }

  isLoggedIn(): boolean {
    let loggedIn = sessionStorage.getItem('loggedIn');
    console.log('Logged in value: ' + loggedIn);
    console.log('Session storage value: ' + sessionStorage.getItem('loggedIn'));
    console.log('Compare results: ' + (loggedIn != null));
    return loggedIn != null;
  }

  registerUser(newUser): boolean {
    this.auth
      .createUserWithEmailAndPassword(newUser.userName, newUser.password)
      .catch((ex) => {
        console.log(ex.code);
        return false;
      })
      .then(function (result) {
        sessionStorage.setItem('loggedIn', '1');
      });
    return true;
  }
}
