import { Component, OnInit } from '@angular/core';
import { BookSearchService } from "../book-search.service";
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items;
  queryField;
  constructor(private booksearchsrevice: BookSearchService) { }

  ngOnInit(): void
  {}

  onSubmit(form:NgForm){
    this.queryField = form.value.searchVariable;
     this.booksearchsrevice.get(form.value.searchVariable).subscribe((data)=>{
       this.items = data['items'];
       console.log(data);

       console.log("test");
       //console.log(this.items[1].volumeInfo.imageLinks.thumbnail);
       console.log(form.value.searchVariable);
     });
  }

}
