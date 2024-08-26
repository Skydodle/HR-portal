import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../../services/onboarding.service'; 
import { VisaService } from 'src/app/services/visa.service';
import { DocumentPreview } from 'src/app/interfaces/visaStatus';

@Component({
  selector: 'app-onboarding-employee-approved-profile',
  templateUrl: './onboarding-employee-approved-profile.component.html',
  styleUrls: ['./onboarding-employee-approved-profile.component.css']
})
export class OnboardingEmployeeApprovedProfileComponent implements OnInit {
  employee: any = {}; // Adjust type if you have a specific Employee interface
  userId: string | null = null;
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
    this.loadDocumentPreviews();
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

  getEmployeeDetails(userId: string): void {
    this.onboardingService.getUserProfileByID(userId).subscribe({
      next: (data) => {
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

  openDriverLicense(): void {
    if (this.driverLicenseUrl) {
      window.open(this.driverLicenseUrl, '_blank');
    }
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
}
