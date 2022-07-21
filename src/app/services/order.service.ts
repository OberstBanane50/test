import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInterface } from './interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<OrderInterface[]> {
    return this.http.get<OrderInterface[]>('/getOrders');
  }

  setOrder(eventID:number, title:string, date:string, time:string, location:string, price:number, amount:number, img:string, description:string): Observable<any> {
    return this.http.post('/setOrder', 
    {
      "eventID": eventID,
      "title": title,
      "date": date,
      "time": time,
      "location": location,
      "price": price,
      "amount": amount,
      "img": img,
      "description": description
    });
  }

  cancelOrder(orderID:number, eventID:number, amount:number): Observable<any> {
    return this.http.post('/cancelOrder', 
    {
      "orderID": orderID,
      "eventID": eventID,
      "amount": amount
    })
  }

}
