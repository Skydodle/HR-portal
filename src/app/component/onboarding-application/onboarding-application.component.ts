import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../services/onboarding.service';
import { Application } from '../../interfaces/onboarding';

@Component({
  selector: 'app-onboarding-application',
  templateUrl: './onboarding-application.component.html',
  styleUrls: ['./onboarding-application.component.css']
})
export class OnboardingApplicationComponent implements OnInit {
  pendingApplications: Application[] = [];
  approvedApplications: Application[] = []; 
  rejectedApplications: Application[] = []; 
  employees: any[] = []; 

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit(): void {
    this.onboardingService.getAllEmployees().subscribe(
      (data: any[]) => {
        // Save all employees
        this.employees = data;
        
        // Filter pending applications
        this.pendingApplications = this.employees
          .filter(employee => employee.onboardingStatus === 'Pending');

        // Filter approved applications
        this.approvedApplications = this.employees
          .filter(employee => employee.onboardingStatus === 'Approved');

        // Filter rejected applications
        this.rejectedApplications = this.employees
        .filter(employee => employee.onboardingStatus === 'Rejected');
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
}
