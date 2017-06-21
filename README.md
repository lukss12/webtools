# Webtools
Webtools assignment simple MEAN app

## Prepare Database

### Import the dataset

mongoimport --db webtools --collection books --drop --file resources/books_dataset.json

### Create index for text search 

Run in your mongodb terminal:

`use webtools`

`db.books.createIndex({title: "text"})`

## Backend - Express

### CRUD Interface
|HTTP Verb|CRUD|api/books|api/books/{id}|
|---------|----|---------|--------------|
|POST|Create|201 (Created), 'Location' header with link to /books/{id} containing new ID.|404 (Not Found), 409 (Conflict) if resource already exists..|
|GET|Read|200 (OK), list of books. Use pagination, sorting and filtering to navigate big lists.|200 (OK), single book. 404 (Not Found), if ID not found or invalid.|
|PUT|Update/Replace|405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.|200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
|PATCH|Update/Modify|405 (Method Not Allowed), unless you want to modify the collection itself.|200 (OK) or 204 (No Content). 404 (Not Found), if ID not found or invalid.|
|DELETE|Delete|405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.|200 (OK). 404 (Not Found), if ID not found or invalid.|


### Text Search API

GET request to `api/search?q={searchTerm}` will return at maximun first 10 matching documents with `searchTerm` in title 


### Run the server

Run `npm run start-dev` to start the server listening for file changes

Run `npm run start` to start production server

## Frontend - AngularCLI

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.