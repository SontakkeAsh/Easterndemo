import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  newEmployeeClicked = false;
  model: any = {};
  model2: any = {};
  myValue;
  employees: any;
  color;
  searchText: string;
  @ViewChild('child', {static: false})
  private child: EditComponent;
  // @ViewChild('child', {static: true}) protected child: EditComponent;
  constructor(private orderService: OrdersService,  private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.orderService.get().then(data => {
      this.employees = data;
    });
  }


  addEmployee() {
    this.employees.push(this.model);
    this.model = {};

  }
  // editEmployee(i) {
  //   return this.child.notifyMe(i);

  // }

  editEmployee(editEmployeeInfo) {
    this.newEmployeeClicked = !this.newEmployeeClicked;
    this.model2.id = this.employees[editEmployeeInfo].id;
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.phone = this.employees[editEmployeeInfo].phone;
    this.model2.address = {};
    this.model2.address.city = this.employees[editEmployeeInfo].address.city;
    this.model2.address.address_line1 = this.employees[editEmployeeInfo].address.address_line1;
    this.model2.address.address_line2 = this.employees[editEmployeeInfo].address.address_line2;
    this.model2.address.postal_code = this.employees[editEmployeeInfo].address.postal_code;
    this.myValue = editEmployeeInfo;
    this.router.navigate(['employee/' + editEmployeeInfo + '/edit']);
  //   this.router.navigateByUrl('employee/' + editEmployeeInfo + '/edit', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([editEmployeeInfo + '/edit']);
  // });
  }

  updateEmployee() {

    const editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i === editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.model2.address = {};
      }
    }
    this.newEmployeeClicked = false;
  }
}




  // addNewEmployeeBtn() {
  //   // this.router.navigate(['/home'], { queryParams: { order: '' } });
  //   this.newEmployeeClicked = !this.newEmployeeClicked;
  // }

