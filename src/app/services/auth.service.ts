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

  public login(): void {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        sessionStorage.setItem('loggedIn', '1');
      });
  }

  public basicLogin(user): void {
    this.auth
      .signInWithEmailAndPassword(user.userName, user.password)
      .catch((ex) => {
        console.log(ex.code);
      })
      .then((result) => {
        sessionStorage.setItem('loggedIn', '1');
      });
  }

  public logout(): void{
    this.auth.signOut().then((result) => {
      sessionStorage.removeItem('loggedIn');
    });
  }

  registerUser(newUser): boolean {
    this.auth
      .createUserWithEmailAndPassword(newUser.userName, newUser.password)
      .catch((ex) => {
        console.log(ex.code);
        return false;
      })
      .then((result) => {
        sessionStorage.setItem('loggedIn', '1');
      });
    return true;
  }
}
