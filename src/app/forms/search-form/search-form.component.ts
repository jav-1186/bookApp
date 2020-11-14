import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../../services/book-search.service';
import { LibraryDataService } from '../../services/library-data.service';
import { FirestoreDataService } from '../../services/firestore-data.service';
// import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
// import {
//   FormControl,
//   FormGroup,
//   Validators,
//   FormBuilder,
// } from "@angular/forms";

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
  constructor(private booksearchsrevice: BookSearchService, public dataService: FirestoreDataService) { }

  ngOnInit(): void
  {}

  onSubmit(): void{
     this.booksearchsrevice.get(this.queryField).subscribe((data) => {
       this.items = data[this.key];
       console.log(data);

       console.log('test');
       // console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(this.queryField);
     });
     this.clear();
  }

  onSubmitSubject(): void{
    this.booksearchsrevice.getSubject(this.queryField3).subscribe((data) => {
      this.items = data[this.key];
      console.log(data);

      console.log('test');
      // console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
      console.log(this.queryField3);
      this.clear();
    });
 }

  onSubmitISBN(): void{
     this.booksearchsrevice.getIsbn(this.queryField2).subscribe((data) => {
       this.items = data[this.key];
       console.log(data);

       console.log('test');
       // console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(this.queryField2);
       this.clear();
     });
  }

  selectItem(item): void{
    this.selectedItem = item;
  }

  addLibrary(item): void{
    // this.dataService.addBook(item);
    const libEntry = {type: 'libEntry', book: item};
    this.dataService.post(libEntry);
  }

  private clear(): void{
    this.queryField = '';
    this.queryField2 = '';
    this.queryField3 = '';
  }
}
