import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit 
{
  constructor(private productService: ProductsService, private router: Router) { }

  addProductRequest: Product ={
    id: '',
    productName: '',
    productCode: '',
    tags: '',
    releaseDate: '',
    price: 0,
    description: '',
    imageUrl: ''
  };
  
  ngOnInit(): void {}
  
  addProduct(){
    this.productService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['products']);
      }
    })
  }

  
}
