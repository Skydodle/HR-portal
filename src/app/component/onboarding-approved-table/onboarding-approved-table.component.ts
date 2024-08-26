import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../../interfaces/onboarding';

@Component({
  selector: 'app-onboarding-approved-table',
  templateUrl: './onboarding-approved-table.component.html',
  styleUrls: ['./onboarding-approved-table.component.css']
})
export class OnboardingApprovedTableComponent implements OnInit {
  @Input() approvedEmployeeData: Application[] = [];
  displayedColumns: string[] = ['fullName', 'email', 'viewApplication'];

  constructor() { }

  ngOnInit(): void { }

  getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  viewApplication(userId: { _id: string }): void {
    const id = userId._id;
    const url = `/onboarding-employee-approved-profile/${id}`;
    window.open(url, '_blank');
  }
}
