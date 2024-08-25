import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-onboarding-application',
  templateUrl: './onboarding-application.component.html',
  styleUrls: ['./onboarding-application.component.css']
})
export class OnboardingApplicationComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchQuery: string = '';
  constructor(private onboardingService: OnboardingService) { }

  ngOnInit(): void {
    this.onboardingService.getAllEmployees().subscribe(
      (data: any[]) => {
        this.employees = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
        this.filteredEmployees = [...this.employees];
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

}
