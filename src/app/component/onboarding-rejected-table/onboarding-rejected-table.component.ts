import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../../interfaces/onboarding';

@Component({
  selector: 'app-onboarding-rejected-table',
  templateUrl: './onboarding-rejected-table.component.html',
  styleUrls: ['./onboarding-rejected-table.component.css']
})
export class OnboardingRejectedTableComponent implements OnInit {
  @Input() rejectedEmployeeData: Application[] = [];
  displayedColumns: string[] = ['fullName', 'email', 'viewApplication'];

  constructor() { }

  ngOnInit(): void { }

  getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  viewApplication(userId: { _id: string }): void {
    const id = userId._id;
    // Assuming the URL pattern is something like '/onboarding-employee-profile/{id}'
    const url = `/onboarding-employee-rejected-profile/${id}`;
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
}
