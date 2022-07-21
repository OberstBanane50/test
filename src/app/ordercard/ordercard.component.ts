import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-ordercard',
  templateUrl: './ordercard.component.html',
  styleUrls: ['./ordercard.component.scss']
})
export class OrdercardComponent implements OnInit {
  @Input() orderID:number = 0;
  @Input() eventID:number = 0;
  @Input() title:string = 'Titel';
  @Input() date:string = '1.1.2000';
  @Input() time:string = '00:00';
  @Input() location:string = 'Veranstaltungsort';
  @Input() price:number = 0;
  @Input() amount:number = 0;
  @Input() img:string = 'assets/img/samplePicture.png'
  @Input() description:string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

  showDetails = false; 

  result = false;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  cancelOrder(){
    this.service.cancelOrder(this.orderID, this.eventID, this.amount).subscribe(data => this.result = data);
  }

}
