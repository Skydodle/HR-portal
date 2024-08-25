import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../services/onboarding.service';

@Component({
  selector: 'app-get-employee-test',
  templateUrl: './get-employee-test.component.html',
  styleUrls: ['./get-employee-test.component.css']
})
export class GetEmployeeTestComponent implements OnInit {
  employees: any[] = [];

  constructor(private onboardingService: OnboardingService) { }

  ngOnInit(): void {
    // this.onboardingService.setToken('your-token-here');
    
    this.onboardingService.getAllEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.employees = data},
      error: (err) => console.error(err)
    });
  }

}
