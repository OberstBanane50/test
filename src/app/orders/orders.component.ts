import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderInterface } from '../services/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  orders: OrderInterface[] = [];

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data => this.orders = data);
  }

}
