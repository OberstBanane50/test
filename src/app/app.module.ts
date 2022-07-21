import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OrdersComponent } from './orders/orders.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { OrdercardComponent } from './ordercard/ordercard.component';

import { EventService } from './services/event.service';
import { OrderService } from './services/order.service';
import { AccountService } from './services/account.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    CatalogComponent,
    OrdersComponent,
    EventcardComponent,
    OrdercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EventService, OrderService, AccountService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
