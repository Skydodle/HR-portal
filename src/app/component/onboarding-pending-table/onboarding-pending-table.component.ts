import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../../interfaces/onboarding';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-pending-table',
  templateUrl: './onboarding-pending-table.component.html',
  styleUrls: ['./onboarding-pending-table.component.css']
})
export class OnboardingPendingTableComponent implements OnInit {
  @Input() pendingEmployeeData: Application[] = [];
  // displayedColumns: string[] = ['fullName', 'email', 'viewApplication', 'actions'];
  displayedColumns: string[] = ['fullName', 'email', 'viewApplication'];


  constructor(private router: Router) { }

  ngOnInit(): void { }

  getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }

  viewApplication(userId: { _id: string }): void {
    const id = userId._id;
    const url = `/onboarding-employee-profile/${id}`;
    window.open(url, '_blank');
  }
}
