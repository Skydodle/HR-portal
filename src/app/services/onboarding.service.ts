import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private apiUrl = '/api/employees'; // Base URL for the API
  private token: string = '';
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
      // Authorization: `Bearer ${yourToken}` // Replace `yourToken` with the actual token variable
    });

    return this.http.get(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Failed to fetch employees, please try again later.'));
  }}
