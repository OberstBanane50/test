import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountInterface } from './interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  loginAccount(email:string, password:string): Observable<AccountInterface[]> {
    return this.http.post<AccountInterface[]>('/loginAccount', 
    {
      "email": email,
      "password": password,
    });
  }

  setAccount(email:string, password:string, name:string): Observable<any> {
    return this.http.post('/register', 
    {
      "email": email,
      "password": password,
      "name": name
    });
  }
}
