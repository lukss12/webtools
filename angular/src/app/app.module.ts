import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {RouterModule, Routes} from "@angular/router";

import { BooksService } from './service/books.service';
import { WithoutPhotoPipe } from './pipe/withoutphoto.pipe';
import { BookComponent } from './component/book/book.component';
import { BookGridComponent } from './component/bookgrid/bookgrid.component';

const appRoutes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: BookGridComponent },
  { path: 'books/:id', component : BookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WithoutPhotoPipe,
    BookComponent,
    BookGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
