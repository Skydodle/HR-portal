import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/visaStatus';
import { VisaService } from 'src/app/services/visa.service';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  inProgressEmployees: Employee[] = [];
  allEmployees: Employee[] = [];

  constructor(private visaService: VisaService) { }

  ngOnInit(): void {
    this.getInProgressEmployees();
    this.getAllEmployees();
  }

  getInProgressEmployees() {
    // Fetch all employees and filter for those with at least one pending document
    this.visaService.getF1EmployeeVisaStatus().subscribe((response: Employee[]) => {
      this.inProgressEmployees = response.filter(employee => {
        const optDocument = employee.citizenship.optDocument;

        // Check if any of the documents have a status of 'pending'
        return optDocument.optReceipt.status === 'pending' ||
               optDocument.optEAD.status === 'pending' ||
               optDocument.i983.status === 'pending' ||
               optDocument.i20.status === 'pending';
      });
    }, error => {
      console.error('Error fetching in-progress employees:', error);
    });
  }

  getAllEmployees() {
    this.visaService.getF1EmployeeVisaStatus().subscribe((response: Employee[]) => {
      this.allEmployees = response;
    }, error => {
      console.error('Error fetching all employees:', error);
    });
  }

}
