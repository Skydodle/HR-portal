import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/login-state.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient) {}

  login(
    username: string,
    email: string,
    password: string
  ): Observable<{ user: User; token: string }> {
    return this.http.post<{ user: User; token: string }>(this.apiUrl, {
      username,
      email,
      password,
    });
  }
}
