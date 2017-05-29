import { Component, OnInit } from '@angular/core';

import {Book} from "../../app.component";
import {BooksService} from "../../service/books.service";

@Component({
  selector: 'app-bookgrid',
  templateUrl: './bookgrid.component.html',
  styleUrls: ['./bookgrid.component.css']
})

export class BookGridComponent implements OnInit {
  errorMessage: string;
  books: Book[];
  mode = 'Observable';

  constructor (private booksService: BooksService) {}

  ngOnInit() { this.getBooks(); }
  getBooks() {
    this.booksService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = <any>error);
  }
}
