import { Component, OnInit } from '@angular/core';
import { BookSearchService } from "../../book-search.service";
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  items;
  queryField;
  queryField2;
  constructor(private booksearchsrevice: BookSearchService) { }

  ngOnInit(): void
  {}

  onSubmit(){
     this.booksearchsrevice.get(this.queryField).subscribe((data)=>{
       this.items = data['items'];
       console.log(data);

       console.log("test");
       //console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(this.queryField);
     });
  }

  onSubmitISBN(){

     this.booksearchsrevice.getIsbn(this.queryField2).subscribe((data)=>{
       this.items = data['items'];
       console.log(data);

       console.log("test");
       //console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(this.queryField2);
     });
  }
}
