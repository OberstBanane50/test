import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInterface } from './interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventInterface[]> {
    return this.http.get<EventInterface[]>('/getEvents');
  }

  filterEvents(age:number, price:number): Observable<EventInterface[]> {
    return this.http.post<EventInterface[]>('/filterEvents', 
    {
      "age": age,
      "price": price
    });
  }
}
