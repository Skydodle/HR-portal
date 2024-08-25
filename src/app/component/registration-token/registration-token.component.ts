import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-token',
  templateUrl: './registration-token.component.html',
  styleUrls: ['./registration-token.component.css'],
})
export class RegistrationTokenComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { name, email } = this.registrationForm.value;

      this.registrationService.sendRegistrationEmail(name, email).subscribe({
        next: (response) => {
          this.snackBar.open('Registration email sent successfully!', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-success'],
          });
        },
        error: (error) => {
          console.error(
            'Error sending registration email:',
            error.error.message
          );
          this.snackBar.open('Failed to send registration email.', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-error'],
          });
        },
      });
    }
  }
}
