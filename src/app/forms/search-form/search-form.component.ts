import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../../book-search.service';
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
  constructor(private booksearchsrevice: BookSearchService) { }

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
  }

  onSubmitSubject(): void{
    this.booksearchsrevice.getSubject(this.queryField3).subscribe((data) => {
      this.items = data[this.key];
      console.log(data);

      console.log('test');
      // console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
      console.log(this.queryField3);
    });
 }

  onSubmitISBN(): void{
     this.booksearchsrevice.getIsbn(this.queryField2).subscribe((data) => {
       this.items = data[this.key];
       console.log(data);

       console.log('test');
       // console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(this.queryField2);
     });
  }

  selectItem(item): void{
    this.selectedItem = item;
  }
}
