import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../service/books.service";
import {Book} from "../../app.component";
import {Router, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  errorMessage: string;
  term: string = "";
  searchBooks: Book[] = new Array<Book>();

  constructor(private booksService: BooksService, private router : Router) { }

  ngOnInit() {
    this.router.events.subscribe(
      val => {this.term = "", this.searchBooks = []}
    );
  }

  searchBook(){
    // console.log(this.term);
    this.booksService.searchBook(this.term) //me subscribe al observable
      .subscribe(
        books => this.searchBooks = books,
        error => this.errorMessage = <any>error
      );
  }

}
