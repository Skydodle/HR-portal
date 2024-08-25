import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeSummary, EmployeeDetail } from '../interfaces/employee'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeSummary[]> {
    return this.http.get<any[]>(`${this.baseUrl}/hr/all-employees`).pipe(
      map((employees) => 
        employees.map(employee => ({
          firstName: employee.firstName,
          lastName: employee.lastName,
          middleName: employee.middleName || "",
          preferredName: employee.preferredName || "",
          cellPhoneNumber: employee.cellPhoneNumber,
          ssn: employee.ssn,
          visaStatus: employee.citizenship.visaStatus,
          email: employee.userId.email,
          userid:employee.userId._id,
        }))
      )
    )
  }

   // Fetch employee detail by ID
   getEmployeeById(id: string): Observable<EmployeeDetail> {
    return this.http.get<EmployeeDetail>(`${this.baseUrl}/hr/employee/${id}`).pipe(
      map((employee: EmployeeDetail) => ({
        ...employee,
        middleName: employee.middleName || "",
        preferredName: employee.preferredName || "",
        workPhoneNumber: employee.workPhoneNumber || "",
        gender: employee.gender || "",
        citizenship: {
          ...employee.citizenship,
          startDate: employee.citizenship.startDate || "",
          endDate: employee.citizenship.endDate || "",
        },
        driverLicense: {
          ...employee.driverLicense,
          licenseNumber: employee.driverLicense.licenseNumber || "",
          expirationDate: employee.driverLicense.expirationDate || "",
        },
        emergencyContacts: employee.emergencyContacts.map(contact => ({
          ...contact,
          middleName: contact.middleName || "",
          email: contact.email || "",
        }))
      }))
    );
  }


}
