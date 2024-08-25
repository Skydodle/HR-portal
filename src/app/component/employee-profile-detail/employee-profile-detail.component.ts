import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetail } from 'src/app/interfaces/employee';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-employee-profile-detail',
  templateUrl: './employee-profile-detail.component.html',
  styleUrls: ['./employee-profile-detail.component.css']
})
export class EmployeeProfileDetailComponent implements OnInit {

  employeeDetail!: EmployeeDetail

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.getEmployeeById(id).subscribe(
        (data: EmployeeDetail) => {
          this.employeeDetail = data;
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
