import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webtools Library';
}

export class Book {
  _id: number;
  title: string;
  thumbnailUrl: string;
}
