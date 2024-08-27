import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../interfaces/hrhousing';

@Injectable({
  providedIn: 'root'
})
export class HrhousingService {

  private baseUrl = 'http://localhost:3000/api/hr/house';
  constructor(private http: HttpClient) { }

  createHouse(houseData: Partial<House>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, houseData);
  }

  deleteHouse(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.baseUrl}/getAll`);
  }

  getHouseDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  updateFacilityReportStatus(id: string, status: string) {
    return this.http.put(`${this.baseUrl}/report/${id}/status`, { status });
  }

  getFacilityReportsForHouse(houseId: string) {
    return this.http.get(`${this.baseUrl}/${houseId}/reports`);
  }

  addCommentToFacilityReport(reportId: string, description: string) {
    return this.http.post(`${this.baseUrl}/report/${reportId}/comment`, { description });
  }

  updateComment(id: string, description: string) {
    return this.http.put(`${this.baseUrl}/comment/${id}`, { description });
  }
}
