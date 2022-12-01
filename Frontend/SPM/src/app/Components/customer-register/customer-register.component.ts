import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  addCustomerRequest: Customer ={
    id: '',
    userName: '',
    email: '',
    password: '',
    mobile: 0,

  };

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {

  }
  
  
  addCustomer(){
    this.customerService.addCustomer(this.addCustomerRequest)
    .subscribe({
      next: (customer) => {
        this.router.navigate(['products']);
      }
    })
  }

}
