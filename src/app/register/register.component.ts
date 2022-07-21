import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nameIn: string = '';
  emailIn: string = '';
  passwordIn: string = '';

  invalidInput = false;
  
  result = false;

  constructor(private service: AccountService) { }

  ngOnInit(): void {
  }

  register(email:string, password:string, name:string) {
    if(this.nameIn == '' || this.emailIn == '' || this.passwordIn == '') {
      this.invalidInput = true;
    }
    else {
      this.invalidInput = false;
      this.service.setAccount(email, password, name).subscribe(data => this.result = data);
    }
  }

}
