import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service'; 

@Component({
  selector: 'app-onboarding-employee-profile',
  templateUrl: './onboarding-employee-profile.component.html',
  styleUrls: ['./onboarding-employee-profile.component.css']
})
export class OnboardingEmployeeProfileComponent implements OnInit {
  employee: any = {}; // Adjust type if you have a specific Employee interface
  userId: string | null = null;
  feedback: string = '';
  showRejectModal: boolean = false;

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

  approveApplication(): void {
    console.log(this.employee._id)
    if (this.employee._id) {
      this.onboardingService.approveApplication(this.employee._id).subscribe({
        next: (response) => {
          alert('Application approved successfully!');
          this.router.navigate(['/hiring-management']); // Adjust the path as needed
        },
        error: (error) => {
          alert('Failed to approve application.');
          console.error(error);
        }
      });
    }
  }

  openRejectModal(): void {
    this.showRejectModal = true;
  }

  closeRejectModal(): void {
    this.showRejectModal = false;
    this.feedback = '';
  }

  rejectApplication(): void {
    if (this.employee._id && this.feedback.trim()) {
      this.onboardingService.rejectApplication(this.employee._id, this.feedback).subscribe({
        next: (response) => {
          alert('Application rejected with feedback!');
          this.closeRejectModal();
          this.router.navigate(['/hiring-management']); // Adjust the path as needed
        },
        error: (error) => {
          alert('Failed to reject application.');
          console.error(error);
        }
      });
    } else {
      alert('Please provide feedback before rejecting.');
    }
  }
}
