import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private baseUrl = 'http://localhost:3000/api'
  // Base URL for the API
  // private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzJiMjA4NDU4YzdkMWQ0ZjM4NDZiOCIsInVzZXJuYW1lIjoiaHJhZG1pbiIsInJvbGUiOiJIUiIsImVtYWlsIjoiaHJAY29tcGFueS5jb20iLCJpYXQiOjE3MjQ1NTg2MzgsImV4cCI6MTcyNDU2MjIzOH0.n7GVvluw2RNpu4PuRlUOKowANFgRyoLWMReenp6Rg7o';
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${this.token}`
      // Authorization: `Bearer ${yourToken}` // Replace `yourToken` with the actual token variable
    });

    return this.http.get(`${this.baseUrl}/employee/employees`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Failed to fetch employees, please try again later.'));
  }}
