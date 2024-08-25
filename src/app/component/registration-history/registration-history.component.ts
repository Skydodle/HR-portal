import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration-history',
  templateUrl: './registration-history.component.html',
  styleUrls: ['./registration-history.component.css'],
})
export class RegistrationHistoryComponent implements OnInit {
  registrationHistory: any[] = [];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrationHistory();
  }

  loadRegistrationHistory(): void {
    this.registrationService.getRegistrationHistory().subscribe(
      (history) => {
        this.registrationHistory = history;
      },
      (error) => {
        console.error('Failed to load registration history', error);
      }
    );
  }
}
