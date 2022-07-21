import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { AccountInterface } from '..//services/interfaces/account.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  emailIn = '';
  passwordIn = '';
  loggedIn = false;

  invalidInput = false;

  account: AccountInterface[] = [
  ];

  constructor(private service: AccountService) { }

  ngOnInit(): void {
  }

  login(email:string, password:string) {
    if(this.emailIn == '' || this.passwordIn == '') {
      this.invalidInput = true;
      this.loggedIn = false;
    }
    else {
      this.invalidInput = false;
      this.service.loginAccount(email, password).subscribe(data => this.account = data);
      this.loggedIn = true;
    }
  }

  logout() {
    this.loggedIn = false;
  }

}
