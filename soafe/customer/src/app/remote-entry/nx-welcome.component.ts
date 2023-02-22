import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr  *ngFor="let customer of customers">
          <td>{{customer.customerId}}</td>
          <td>{{customer.customerName}}</td>
          <td>{{customer.customerEmail}}</td>
          <td><button (click)="deleteWrapper(customer.customerId)">Delete</button></td>
        </tr>
      </tbody>

    </table>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit{
  customers: any;
  customer:any;
  constructor(
    private http : HttpClient,
  ){}

  ngOnInit(): void {
    this.getCustomers().subscribe(result =>{
      console.log(result)
      this.customers = result;
    })
  }

  getCustomers():Observable<any>{
    return this.http.get("http://localhost:8007/api/Customer");
  }
  
  deleteCustomer(id: number):Observable<any>{
    return this.http.delete("http://localhost:8007/api/Customer/"+id);
  }

  deleteWrapper(id: number){
    this.deleteCustomer(id).subscribe(result => {
      console.log(result); 
    })
    window.location.reload();
  }
}


