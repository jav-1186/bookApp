import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  constructor(private db: AngularFirestore) {
    const things = db.collection('things').valueChanges();
    things.subscribe(console.log);
   }

   public post(object): boolean{
     this.db.collection('things').add({
       type: 'test',
       data: 'test_data'
     })
     .then(function(docRef) {
       console.log('Document written with ID: ', docRef.id);
     })
     .catch(function(error) {
       console.error('Error adding document: ', error);
     });
     return true;
   }
}
