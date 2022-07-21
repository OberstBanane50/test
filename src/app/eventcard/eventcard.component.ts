import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss']
})
export class EventcardComponent implements OnInit {
  @Input() eventID:number = 0;
  @Input() title:string = 'Titel';
  @Input() date:string = '1.1.2000';
  @Input() time:string = '00:00';
  @Input() location:string = 'Veranstaltungsort';
  @Input() price:number = 0;
  @Input() available:number = 0;
  @Input() img:string = 'assets/img/samplePicture.png';
  @Input() description:string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  showDetails = false;
  showCheckout = false;

  amountIn:number = 1;
  invalidAmount = false;

  result = false;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.showCheckout = false;
  }

  toggleCheckout() {
    this.showCheckout = true;
    this.showDetails = false;
  }

  checkout() {
    if(this.amountIn > this.available) {
      this.invalidAmount = true;
    }
    else {
      this.invalidAmount = false;
      this.service.setOrder(this.eventID, this.title, this.date, this.time, this.location, this.price, this.amountIn, this.img, this.description).subscribe(data => this.result = data);
    }
    
  }

}
