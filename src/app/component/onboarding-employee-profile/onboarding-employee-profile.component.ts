import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service'; 
import { VisaService } from 'src/app/services/visa.service';
import { DocumentPreview } from 'src/app/interfaces/visaStatus';

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
  documentPreviews: DocumentPreview[] = [];
  profilePictureUrl: string = '';
  driverLicenseUrl: string= '';
  constructor(
    private route: ActivatedRoute,
    private onboardingService: OnboardingService,
    private router: Router,
    private visaService: VisaService
  ) { }

  ngOnInit(): void {


    // Retrieve the userId from the route parameters
    this.userId = this.route.snapshot.paramMap.get('userId');

    if (this.userId) {
      console.log('Fetching details for:', this.userId); // Debug log
      this.getEmployeeDetails(this.userId);

    }

  }
  loadDocumentPreviews() {
    this.visaService.getEmployeeVisaPreview(this.employee.userId).subscribe((previews: DocumentPreview[]) => {
      this.documentPreviews = previews;
      console.log(this.documentPreviews)
    }, error => {
      console.error('Error fetching document previews:', error);
    });
  }

  getDocumentUrl(documentType: string): string {
    const doc = this.documentPreviews.find(d => d.documentType === documentType);
    return doc ? doc.url : '';
  }

  previewDocument(documentType: string) {
    const url = this.getDocumentUrl(documentType);
    if (url) {
      window.open(url, '_blank');
    }
  }
  
  openDriverLicense(): void {
    if (this.driverLicenseUrl) {
      window.open(this.driverLicenseUrl, '_blank');
    }
  }


  getEmployeeDetails(userId: string): void {
    this.onboardingService.getUserProfileByID(userId).subscribe({
      next: (data) => {
        console.log("hello")
        console.log('Employee data:', data);
        // Assign the fetched data to the employee object
        this.employee = data.user || {};
        this.loadDocumentPreviews();
        this.loadProfilePicture()
        this.loadDriverLicense()
      },
      error: (err) => {
        console.error('Error fetching employee details:', err);
      }
    });
  }
  loadDriverLicense(): void {
    const documentName = this.employee.driverLicense.licenseCopy;
    if (documentName){
      this.onboardingService.getFileUrl(documentName).subscribe({
        next: (response) => {
          console.log('Profile picture URL:', response.url);
          this.driverLicenseUrl = response.url;
        },
        error: (err) => {
          console.error('Error fetching profile picture URL:', err);
        }
      });
    }
  }
  loadProfilePicture(): void {
    const documentName = this.employee.profilePicture;
    this.onboardingService.getFileUrl(documentName).subscribe({
      next: (response) => {
        console.log('Profile picture URL:', response.url);
        this.profilePictureUrl = response.url;
      },
      error: (err) => {
        console.error('Error fetching profile picture URL:', err);
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
