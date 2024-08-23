import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store/login/login.actions';
import {
  selectLoginError,
  selectIsAuthenticated,
} from '../../store/login/login.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  error$: Observable<string | null>;
  isAuthenticated$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    // Transform the error observable to extract the message
    this.error$ = this.store.select(selectLoginError).pipe(
      map((error: string | { message: string } | null) => {
        if (error && typeof error === 'object') {
          return error.message || 'An unknown error occurred';
        }
        return error;
      })
    );
    // Observable to track if the user is authenticated, used to conditionally display success messages or redirect.
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        setTimeout(() => {
          // Redirect to another page after 2 seconds
          this.router.navigate(['/employee-profiles']); // Assuming you have a dashboard route
        }, 2000);
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.store.dispatch(login({ username, email: '', password }));
    }
  }
}
