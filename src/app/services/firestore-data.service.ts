import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  public postBook(object): boolean {
    let collectionId;
    let docId;
    if (object.type && object.userId) {
      collectionId = this.getCollectionId(object);
      docId = this.getDocId(object);
      this.db
        .collection(collectionId)
        .doc(docId)
        .set(object)
        .catch((error) => {
          console.error('Error adding document: ', error);
          return false;
        });
    }
    return true;
  }

  public getCollectionId(object): string {
    return object.userId + '_' + object.type;
  }

  public getDocId(object): string {
    return object.book.id;
  }

  public getCollection(request): Observable<any[]> {
    return this.db.collection(this.getCollectionId(request)).valueChanges();
  }
}
