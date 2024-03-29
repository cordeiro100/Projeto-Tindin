import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://api-labs.tindin.com.br/auth';

  constructor(private httpCliet: HttpClient) {}

  login(user: User): Observable<any> {
    return this.httpCliet.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response',
    });
  }
}
