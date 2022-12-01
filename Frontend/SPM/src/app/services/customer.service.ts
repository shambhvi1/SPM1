import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseApiUrl='https://localhost:7254/api/Customer';

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.baseApiUrl)

  }

  addCustomer(addCustomerRequest: Customer): Observable<Customer> {

    addCustomerRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Customer>(this.baseApiUrl,addCustomerRequest);
  }
}
