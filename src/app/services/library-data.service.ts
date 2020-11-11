import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryDataService {

  constructor() { }

  public getLibrary(): Array<{dateCompleted, book}>{
    return ((localStorage.getItem('personalLibrary') != null) ? JSON.parse(localStorage.getItem('personalLibrary')) : null);
  }

  public addBook(book): void{
    let userLibrary;
    if (localStorage.getItem('personalLibrary') != null){
      userLibrary = JSON.parse(localStorage.getItem('personalLibrary'));
    }
    else{
      userLibrary = new Array();
    }
    userLibrary.push(book);
    localStorage.setItem('personalLibrary', JSON.stringify(userLibrary));
  }
}
