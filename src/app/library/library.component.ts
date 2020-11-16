import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../services/firestore-data.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

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

  items: Observable<Item[]>;
  library;

  constructor(public db: FirestoreDataService, public auth: AuthService) { }

  ngOnInit(): void {
    this.items = this.db.getCollection({userId: this.auth.currentUserId, type: 'libEntry'});
  }
}
