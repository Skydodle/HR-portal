import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './store/login/login.actions';
import { selectIsAuthenticated } from './store/login/login.selectors';

@Component({
  selector: 'app-login-test',
  template: `
    <button (click)="login()">Login</button>
    <div *ngIf="isAuthenticated$ | async">Logged in!</div>
    <div *ngIf="!(isAuthenticated$ | async)">Not logged in</div>
  `,
})
export class LoginTestComponent {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);

  constructor(private store: Store) {}

  login() {
    this.store.dispatch(
      login({
        username: 'hradmin',
        email: 'hr@company.com',
        password: '1234HR!',
      })
    );
  }
}
