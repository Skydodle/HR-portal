import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetail } from 'src/app/interfaces/employee';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-profile-detail',
  templateUrl: './employee-profile-detail.component.html',
  styleUrls: ['./employee-profile-detail.component.css'],
})
export class EmployeeProfileDetailComponent implements OnInit {
  employeeDetail!: EmployeeDetail;

  // employeeDetail: EmployeeDetail = {
  //   userId: { email: 'fsdfsdcsd' },
  //   firstName: 'csdccscs',
  //   lastName: 'cscsdcs',
  //   middleName: 'sdcc',
  //   preferredName: 'sdccs',
  //   address: {
  //     street: '456 Elm St2c',
  //     city: 'csOthertownd',
  //     state: 'csNYd',
  //     zip: '67890dcsc',
  //   },
  //   cellPhoneNumber: '555-234-5678dcs',
  //   workPhoneNumber: '555-876-5432dcsc',
  //   car: { make: 'Honda', model: 'Civic', color: 'Red' },
  //   ssn: '987-65-432',
  //   dateOfBirth: '706334400000',
  //   gender: 'Male',
  //   citizenship: {
  //     visaStatus: 'F1',
  //     startDate: '1723694400000',
  //     endDate: '1723003200000',
  //   },
  //   driverLicense: {
  //     hasDriverLicense: true,
  //     licenseNumber: 'S9876543',
  //     expirationDate: '1861833600000',
  //   },
  //   emergencyContacts: [
  //     {
  //       firstName: 'Robertdcsc',
  //       lastName: 'dSmithcsc',
  //       middleName: '',
  //       phone: 'csdcsdcsc',
  //       email: 'csdc@csac.comdcs',
  //       relationship: 'Fatherdcsc',
  //     },
  //   ],
  // };

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getEmployeeById(id).subscribe(
        (data: EmployeeDetail) => {
          this.employeeDetail = data;
          // {
          //   userId: { email: 'fsdfsdcsd' },
          //   firstName: 'csdccscs',
          //   lastName: 'cscsdcs',
          //   middleName: 'sdcc',
          //   preferredName: 'sdccs',
          //   address: {
          //     street: '456 Elm St2c',
          //     city: 'csOthertownd',
          //     state: 'csNYd',
          //     zip: '67890dcsc',
          //   },
          //   cellPhoneNumber: '555-234-5678dcs',
          //   workPhoneNumber: '555-876-5432dcsc',
          //   car: { make: 'Honda', model: 'Civic', color: 'Red' },
          //   ssn: '987-65-432',
          //   dateOfBirth: '706334400000',
          //   gender: 'Male',
          //   citizenship: {
          //     visaStatus: 'F1',
          //     startDate: '1723694400000',
          //     endDate: '1723003200000',
          //   },
          //   driverLicense: {
          //     hasDriverLicense: true,
          //     licenseNumber: 'S9876543',
          //     expirationDate: '1861833600000',
          //   },
          //   emergencyContacts: [
          //     {
          //       firstName: 'Robertdcsc',
          //       lastName: 'dSmithcsc',
          //       middleName: '',
          //       phone: 'csdcsdcsc',
          //       email: 'csdc@csac.comdcs',
          //       relationship: 'Fatherdcsc',
          //     },
          //   ],
          // };
        },
        (error) => {
          console.error('Error fetching employee details:', error);
        }
      );
    }
  }

  calculateDaysRemaining(endDate: string): number {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays;
  }

  goBack(): void {
    this.router.navigate(['/employee-profiles']);
  }
}
