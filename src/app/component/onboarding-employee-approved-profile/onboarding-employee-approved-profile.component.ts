import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service'; 

@Component({
  selector: 'app-onboarding-employee-approved-profile',
  templateUrl: './onboarding-employee-approved-profile.component.html',
  styleUrls: ['./onboarding-employee-approved-profile.component.css']
})
export class OnboardingEmployeeApprovedProfileComponent implements OnInit {
  employee: any = {}; // Adjust type if you have a specific Employee interface
  userId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private onboardingService: OnboardingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Retrieve the userId from the route parameters
    this.userId = this.route.snapshot.paramMap.get('userId');

    if (this.userId) {
      console.log('Fetching details for:', this.userId); // Debug log
      this.getEmployeeDetails(this.userId);
    }
  }

  getEmployeeDetails(userId: string): void {
    this.onboardingService.getUserProfileByID(userId).subscribe({
      next: (data) => {
        console.log('Employee data:', data);
        // Assign the fetched data to the employee object
        this.employee = data.user || {};
      },
      error: (err) => {
        console.error('Error fetching employee details:', err);
      }
    });
  }


}
