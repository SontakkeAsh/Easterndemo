import { Injectable } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Observable, of } from 'rxjs';
import { tap, pluck, withLatestFrom, switchMap, map, filter } from 'rxjs/operators';

const employees = [
  { id: 1, name: 'Jhon ', phone: 85567584 , address:
  {
  city: 'Pune',
  address_line1: 'ABC road',
  address_line2: 'XYZ building',
  postal_code: '78666'
  }},
  { id: 2, name: 'sacob', phone: 244354 , address:
  {
  city: 'indore',
  address_line1: 'mount rode',
  address_line2: 'qween building',
  postal_code: '9255495'
  }},
  { id: 3, name: 'jacob', phone: 674563 , address:
  {
  city: 'pune',
  address_line1: 'mount rode',
  address_line2: 'key road building',
  postal_code: '9255495'
  }},
  { id: 4, name: 'shriti', phone: 4534745 , address:
  {
  city: 'inore',
  address_line1: 'mount rode',
  address_line2: 'kaddt',
  postal_code: '9255495'
  }}
];

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(employees));
  }

  addEmployee(value) {
    return value;
  }

  // private data: Observable<Order[]>;
  // filtered_data$: Observable<Order[]>;

  // constructor(private route: ActivatedRoute) {
  //   this.data = of(order_data);
  //   this.filtered_data$ = this.route.queryParams.pipe(
  //     tap(params => console.log(params)),
  //     pluck('filter'),
  //     map(filter => filter ? filter : ''),
  //     withLatestFrom(this.data),
  //     map(([filter, data]: [string, Order[]]) => {
  //       return data.filter((order: Order) => {
  //         return order.name.toLowerCase().startsWith(filter.toLowerCase());
  //       });
  //     }),
  //     tap(orders => console.log(orders))
  //   );
  // }
}
