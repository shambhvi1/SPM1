import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  searchedKeyword: string='';

  
 
  products: Product[] = [];
  filteredProducts: Product[] = [];

  // _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }

  constructor(private productsService: ProductsService) { }

  // performFilter(filterBy: string): Product[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: Product) =>
  //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  ngOnInit(): void {

    this.productsService.getAllproducts().subscribe(
      {
        next: (products) =>{
          this.products= products;
          this.filteredProducts = this.products;
        },
        error: (response) => {
          console.log(response);
        }      }
    );
  }

}
