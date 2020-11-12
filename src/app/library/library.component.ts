import { Component, OnInit } from '@angular/core';
import { LibraryDataService } from '../services/library-data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  library;

  constructor(public dataService: LibraryDataService) { }

  ngOnInit(): void {
    this.library = this.dataService.getLibrary();
    console.log(this.library);
  }

}
