import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../services/firestore-data.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Item{
  userId: string;
  type: string;
  book: any;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  ref: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  library;

  constructor(public dataService: FirestoreDataService, public auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.ref = this.afs.collection(this.dataService.getId({userId: this.auth.currentUserId, type: 'libEntry' }));
    this.items = this.ref.valueChanges();
    // const libRef = this.dataService.getCollection({userId: this.auth.currentUserId, type: 'libEntry'});
    // this.library = this.dataService.getLibrary();
    // console.log(this.library);
  }



}
