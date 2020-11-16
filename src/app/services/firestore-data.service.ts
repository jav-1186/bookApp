import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataService {
  dataTypes: Array<string> = ['libEntry', 'goalEntry'];

  constructor(private db: AngularFirestore) {
    // const things = db.collection('libEntry').valueChanges();
    // things.subscribe(console.log);
  }

  public post(object): boolean {
    if (object.type && object.userId) {
      const collectionId = this.getId(object);
      this.db
        .collection(collectionId)
        .add(object)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
          return false;
        });
    }
    return true;
  }

  public getId(object): string {
    const collectionId = object.userId + '_' + object.type;
    return collectionId;
  }
}
