import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employees: any;
  model2 = {
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
  myValue;

  constructor(private orderService: OrdersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
       this.model2.id = params.id;
      // });

       this.orderService.get().then(data => {
      this.employees = data;
      console.log(this.employees);
      this.notifyMe(this.model2.id - 1);
    });

  });
  }

  notifyMe(editEmployeeInfo) {
      console.log(this.employees);
    // editEmployee(editEmployeeInfo) {
      this.model2.id = this.employees[editEmployeeInfo].id;
      this.model2.name = this.employees[editEmployeeInfo].name;
      this.model2.phone = this.employees[editEmployeeInfo].phone;
      this.model2.address.city = this.employees[editEmployeeInfo].address.city;
      this.model2.address.address_line1 = this.employees[editEmployeeInfo].address.address_line1;
      this.model2.address.address_line2 = this.employees[editEmployeeInfo].address.address_line2;
      this.model2.address.postal_code = this.employees[editEmployeeInfo].address.postal_code;
      this.myValue = editEmployeeInfo;

  }
  // editEmployee(editEmployeeInfo) {
  //   this.model2.name = this.employees[editEmployeeInfo].name;
  //   this.model2.position = this.employees[editEmployeeInfo].position;
  //   this.myValue = editEmployeeInfo;
  // }

  // editEmployee(editEmployeeInfo) {
  //   this.model2.id = this.employees[editEmployeeInfo].id;
  //   this.model2.name = this.employees[editEmployeeInfo].name;
  //   this.model2.phone = this.employees[editEmployeeInfo].phone;
  //   this.model2.city = this.employees[editEmployeeInfo].city;
  //   this.myValue = editEmployeeInfo;
  // }

  updateEmployee() {
    const editEmployeeInfo = this.model2.id;
    // const editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i === editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = null;
        this.model2.address = null;
      }
    }
   // this.newEmployeeClicked = false;
    // for (let i = 0; i < this.employees.length; i++) {
    //   if (i === editEmployeeInfo) {
    //     this.employees[i] = this.model2;
    //     // this.model2 = {};
    //   }
    // }

  }
}
