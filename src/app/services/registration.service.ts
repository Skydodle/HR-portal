import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private baseUrl = 'http://localhost:3000/api/hr';

  constructor(private http: HttpClient) {}

  // Method to send registration email
  sendRegistrationEmail(name: string, email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-email`, { name, email });
  }

  // Method to get registration history
  getRegistrationHistory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/registration-history`);
  }
}
