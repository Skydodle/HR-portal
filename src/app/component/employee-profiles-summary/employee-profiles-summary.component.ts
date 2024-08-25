import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeSummary } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-profiles-summary',
  templateUrl: './employee-profiles-summary.component.html',
  styleUrls: ['./employee-profiles-summary.component.css']
})
export class EmployeeProfilesSummaryComponent implements OnInit {

  @Input() employee!: EmployeeSummary

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(): void {
    this.router.navigate(['/employee-profiles', this.employee.userid]);
  }
}
