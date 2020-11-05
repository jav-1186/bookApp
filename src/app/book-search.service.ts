import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  key = "AIzaSyBAtb9s9LonTdKUIS_8q3iC_K7cQ81mTMk"
  constructor(private httpClient: HttpClient) { }
  get(queryField: string)
  {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`);
  }
}
