import { Component, OnInit } from '@angular/core';
import { FirestoreDataService } from '../services/firestore-data.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

interface Item{
  userId: string;
  type: string;
  completeDate: string;
  book: any;
}

interface Book{
  volumeInfo: {
    title: string;
    authors: string[];
    pageCount: number;
    publishedDate: string;
  };
}

interface CompleteDate{
  month: number;
  day: number;
  year: number;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [DatePipe]
})
export class LibraryComponent implements OnInit {

  items;
  library;
  nullBook: Book = {volumeInfo: {title: 'placeHolder', authors: ['placeHolder'], pageCount: 999, publishedDate: 'placeHolder'}};
  nullEntry: Item = {userId: 'placeHolder', type: 'placeHolder', completeDate: 'placeHolder', book: this.nullBook};
  selectedEntry: Item;
  updateComplete: Date;
  collectionId: {userId: string, type: string};
  updateStatus = false;


  constructor(public db: FirestoreDataService, public auth: AuthService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.collectionId = { userId: this.auth.currentUserId, type: 'libEntry' };
    this.items = this.db.getCollection(this.collectionId);
    this.selectedEntry = this.nullEntry;
  }

  selectEntry(entry): void{
    this.selectedEntry = entry;
    console.log('Selected entry: ', this.selectedEntry);
  }

  updateEntry(): void{
    this.selectedEntry.completeDate = this.transformDate(this.updateComplete);
    this.updateStatus = this.db.post(this.selectedEntry);
  }

  transformDate(date): string{
    return this.datePipe.transform(date, 'MM/dd/yyy');
  }
}
