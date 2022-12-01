import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

import { Observable, map} from 'rxjs';


import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl='https://localhost:7254/api/products';
 
  constructor(private http: HttpClient) { }

  getAllproducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseApiUrl)

  }

  addProduct(addCustomerRequest: Product): Observable<Product> {

    addCustomerRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Product>(this.baseApiUrl,addCustomerRequest);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/' + id);

  }

  updateProduct(id: string, updateProductRequest: Product ):  Observable<Product>{
    console.log(updateProductRequest);
   return this.http.put<Product>(this.baseApiUrl + '/' + id, updateProductRequest);
  }

  deleteProduct(id: string):  Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + '/' + id);
   }
}
