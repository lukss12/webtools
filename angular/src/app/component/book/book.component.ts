import { Component, OnInit } from '@angular/core';
import {AppComponent, Book} from "../../app.component";
import {BooksService} from "../../service/books.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  errorMessage: string;
  book: Book;
  mode = 'Observable';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.booksService.getBook(params['id']))
    .subscribe(
      book =>  this.book = book,
      error => this.errorMessage = <any>error
    );
  }

  goBack(): void {
    this.location.back();
  }
}

