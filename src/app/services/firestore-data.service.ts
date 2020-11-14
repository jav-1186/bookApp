import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataService {
  constructor(private db: AngularFirestore) {
    const things = db.collection('libEntry').valueChanges();
    things.subscribe(console.log);
  }

  public post(object): boolean {
    this.db
      .collection(
        this.collectionCheck(object) !== 'Type_Not_Found'
          ? this.collectionCheck(object)
          : ''
      )
      .add(object)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
        return false;
      });
    return true;
  }

  private collectionCheck(object): string {
    let returnValue = 'Type_Not_Found';
    if (object.type != null) {
      returnValue = object.type;
    }
    return returnValue;
  }
}
