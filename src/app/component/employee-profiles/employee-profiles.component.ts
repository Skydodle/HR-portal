import { Component, OnInit } from '@angular/core';
import { EmployeeSummary } from 'src/app/interfaces/employee';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-profiles',
  templateUrl: './employee-profiles.component.html',
  styleUrls: ['./employee-profiles.component.css']
})
export class EmployeeProfilesComponent implements OnInit {

  employees: EmployeeSummary[] = []
  filteredEmployees: EmployeeSummary[] = [];
  searchTerm: string = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.fetchAllEmployees()
  }

  fetchAllEmployees(): void {
    this.profileService.getAllEmployees().subscribe(
      (employees: EmployeeSummary[]) => {
        this.employees = employees; 
        this.filteredEmployees = employees; 
      },
      (error) => {
        console.error('Failed to fetch employees', error); 
      }
    );
  }

  filterEmployees(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(employee => 
      employee.firstName.toLowerCase().includes(term) ||
      employee.lastName.toLowerCase().includes(term) ||
      (employee.preferredName && employee.preferredName.toLowerCase().includes(term))
    );
  }

}
