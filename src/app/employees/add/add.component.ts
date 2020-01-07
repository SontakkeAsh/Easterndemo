import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
employees;
model = {
  id: null,
name: '',
phone: null,
address:
  {
  city: '',
  address_line1: '',
  address_line2: '',
  postal_code: ''
  }
};
  constructor(private orderService: OrdersService,  private router: Router ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.orderService.get().then(data => {
      this.employees = data;
    });
  }

    addEmployee() {
      console.log(this.model);
      this.employees.push(this.model);
      this.router.navigate(['employee']);
  }
}
