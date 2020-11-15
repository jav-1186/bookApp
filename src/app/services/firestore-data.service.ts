import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataService {

  dataTypes: Array<string> = ['libEntry', 'goalEntry'];

  constructor(private db: AngularFirestore) {
    const things = db.collection('libEntry').valueChanges();
    things.subscribe(console.log);
  }

  public post(object): boolean {
    if (object.type) {
      this.db.collection(object.type)
        .add(object)
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
          return false;
        });
    }
    return true;
  }
}
