import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentPreview, Employee, optDocument } from '../interfaces/visaStatus';

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  private baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
  
  // Method to get the F1 Employee Visa Status
  getF1EmployeeVisaStatus() : Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/visa/hr`);
  }

  // Method to get the Employee Visa Document Preview URLs
  getEmployeeVisaPreview(userid: string): Observable<DocumentPreview[]> {
    const body = {userid}
    return this.http.post<DocumentPreview[]>(`${this.baseUrl}/visa/hr/doc`, body)
  }

  approveEmployeeVisa(userid: string, documentType: string): Observable<optDocument> {
    const body = {userid, documentType}
    return this.http.put<optDocument>(`${this.baseUrl}/visa/hr/approve`, body)
  }

  rejectEmployeeVisa(userid: string, documentType: string, feedback: string): Observable<optDocument> {
    const body = {userid, documentType, feedback}
    return this.http.put<optDocument>(`${this.baseUrl}/visa/hr/reject`, body)
  }
}
