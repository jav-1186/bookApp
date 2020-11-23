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
    if (object.type === 'libEntry'){
      return object.book.id;
    }
    return object.goal.id;
  }

  public getCollection(request): Observable<any[]> {
    return this.db.collection(this.getCollectionId(request)).valueChanges();
  }

}
