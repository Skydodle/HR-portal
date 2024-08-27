import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/login-state.interface';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/auth/HRlogin';

  constructor(private http: HttpClient, private router: Router) {}

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
  checkTokenValidity(): boolean {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp > currentTime) {
          return true; // Token is valid
        }
      } catch (error) {
        // Handle decoding error
        console.error('Error decoding token:', error);
      }
    }
    return false; // Token is invalid or expired
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
