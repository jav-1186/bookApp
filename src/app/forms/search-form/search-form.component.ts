import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  book: {category, isbn} = {category: '', isbn: null};

  constructor() { }

  ngOnInit(): void {
  }

  categorySearch(): void{
    console.log('Category Search: ' + this.book.category);
    this.book = {category: '', isbn: null};
  }

  isbnSearch(): void{
    console.log('ISBN Search: ' + this.book.isbn);
    this.book = {category: '', isbn: null};
  }
}
