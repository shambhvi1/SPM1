import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productDetails: Product ={
    id: '',
    productName: '',
    productCode: '',
    tags: '',
    releaseDate: '',
    price: 0,
    description: '',
    imageUrl: ''
  };
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          //call api
          this.productService.getProduct(id).
          subscribe({
            next: (response) => {
              this.productDetails = response;
            }
          })

        }
      }
    })
  }
  updateProduct(){
    this.productService.updateProduct(this.productDetails.id, this.productDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['/products']);
      },
      error: (response) => {
        console.log(response);
      } 
    });
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(this.productDetails.id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['products']);
      },
      error: (response) => {
        console.log(response);
      } 
    });
  }

}
