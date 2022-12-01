import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';


const routes: Routes = [
  {
    path:'',
    component: CustomerRegisterComponent
  },
  {
    path:'products',
    component: ProductListComponent
  },
  {
    path:'products/add',
    component: AddProductComponent
  },
  {
    path:'products/edit/:id',
    component: EditProductComponent
  },
  {
    path:'customers/add',
    component: CustomerRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
