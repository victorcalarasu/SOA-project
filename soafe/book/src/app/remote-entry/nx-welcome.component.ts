import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

/* eslint-disable */

@Component({
  selector: 'soafe-nx-welcome',
  template: `
  <style>
    </style>
    <div class="wrapper">
    <table class="table">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Name</th>
          <th>Book Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr  *ngFor="let book of books">
          <td>{{book.bookId}}</td>
          <td>{{book.bookName}}</td>
          <td>{{book.bookPrice}}</td>
          <td><button (click)="deleteWrapper(book.bookId)">Delete</button></td>
        </tr>
      </tbody>

    </table>
    <div class="add-form">
    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">

      <div>
        <label for="name">
          Name
        </label>
        <input id="name" type="text" formControlName="name">
      </div>

      <div>
        <label for="price">
          Price
        </label>
        <input id="price" type="text" formControlName="price">
      </div>

      <button class="button" type="submit">Add</button>

    </form>
    </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit{
  books: any;
  book:any;
  constructor(
    private http : HttpClient,
    private formBuilder: FormBuilder
  ){}

  checkoutForm = this.formBuilder.group({
    name: '',
    price: ''
  });

  ngOnInit(): void {
    this.getBooks().subscribe(result =>{
      console.log(result)
      this.books = result;
    })

  }

  addBook():Observable<any>{
    this.book = {
      bookName: this.checkoutForm.value.name,
      bookPrice: this.checkoutForm.value.price
    }
    return this.http.post("http://localhost:8007/api/Book", this.book);
  }

  getBooks():Observable<any>{
    return this.http.get("http://localhost:8007/api/Book");
  }
  
  deleteBook(id: number):Observable<any>{
    return this.http.delete("http://localhost:8007/api/Book/"+id);
  }

  deleteWrapper(id: number){
    this.deleteBook(id).subscribe(result => {
      console.log(result); 
    })
    window.location.reload();
  }

  onSubmit(): void {
    this.addBook().subscribe(result=>{
        console.log(result);
    });
    this.checkoutForm.reset();
    window.location.reload();
  }
}
