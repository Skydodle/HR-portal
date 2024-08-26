import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  private baseUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });

    return this.http.get(`${this.baseUrl}/employee/employees`, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  getUserProfileByID(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(`${this.baseUrl}/employee/profileID/${userId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  approveApplication(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.baseUrl}/employee/applications/approve/${id}`, {}, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  rejectApplication(id: string, feedback: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(`${this.baseUrl}/employee/applications/reject/${id}`, { feedback }, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Failed to fetch employees, please try again later.'));
  }}
