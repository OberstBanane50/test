import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventInterface } from '../services/interfaces/event.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  age: number = 0;
  price: number = 1000;
  
  events: EventInterface[] = [];

  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.service.getEvents().subscribe(data => this.events = data);
  }

  filterEvents(age:number, price:number) {
    this.service.filterEvents(age, price).subscribe(data => this.events = data);
  }

  resetEventsFilter() {
    this.service.getEvents().subscribe(data => this.events = data);
  }

}
