import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryDataService {

  constructor() { }

  public getLibrary(): Array<{completeDate, book}>{
    return ((localStorage.getItem('personalLibrary') != null) ? JSON.parse(localStorage.getItem('personalLibrary')) : null);
  }

  public addBook(item): void{
    let userLibrary;
    let libEntry;
    if (localStorage.getItem('personalLibrary') != null){
      userLibrary = JSON.parse(localStorage.getItem('personalLibrary'));
    }
    else{
      userLibrary = new Array();
    }
    libEntry = { completeDate: '--/--/----', book: item};
    userLibrary.push(libEntry);
    localStorage.setItem('personalLibrary', JSON.stringify(userLibrary));
  }
}
