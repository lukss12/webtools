import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Book} from "../app.component";

@Injectable()
export class BooksService {

  searchUrl:string = "http://localhost:7000/api/";

  constructor( private httpModule: Http ) { }

  getBooks() : Observable<Book[]>{
    let url = this.searchUrl + 'books/';

    return this.httpModule.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getBook(id: String) : Observable<Book>{
    let url = this.searchUrl + 'books/' + id;

    return this.httpModule.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  searchBook(searchTerm: String) : Observable<Book[]>{
    let url = this.searchUrl + 'search?q=' + searchTerm;

    return this.httpModule.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
