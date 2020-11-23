import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { AuthService } from '../../services/auth.service';
import { FirestoreDataService } from '../../services/firestore-data.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  key = 'items';
  items;
  queryField;
  queryField2;
  queryField3;
  selectedItem;
  defaultDate = '--/--/----';

  constructor(private booksearchsrevice: BookSearchService, public dataService: FirestoreDataService, public auth: AuthService) { }

  ngOnInit(): void
  {}

  onSubmit(): void{
     this.booksearchsrevice.get(this.queryField).subscribe((data) => {
       this.items = data[this.key];
       console.log(data);
     });
     this.clear();
  }

  onSubmitSubject(): void{
    this.booksearchsrevice.getSubject(this.queryField3).subscribe((data) => {
      this.items = data[this.key];
      console.log(data);
      this.clear();
    });
 }

  onSubmitISBN(): void{
     this.booksearchsrevice.getIsbn(this.queryField2).subscribe((data) => {
       this.items = data[this.key];
       console.log(data);
       this.clear();
     });
  }

  selectItem(item): void{
    this.selectedItem = item;
  }

  addLibrary(item): void{
    const libEntry = {userId: this.auth.currentUserId, type: 'libEntry', completeDate: this.defaultDate, book: item};
    const libraryPost = this.dataService.post(libEntry);
    console.log('Library post status: ', libraryPost);
  }

  private clear(): void{
    this.queryField = '';
    this.queryField2 = '';
    this.queryField3 = '';
  }
}
