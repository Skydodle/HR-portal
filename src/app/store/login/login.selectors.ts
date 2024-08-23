import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../../interfaces/login-state.interface';

// Selector to get the Login feature state
export const selectLoginState = createFeatureSelector<LoginState>('login');

// Selector to get the current user
export const selectCurrentUser = createSelector(
  selectLoginState,
  (state: LoginState) => state.user
);

// Selector to get the authentication status
export const selectIsAuthenticated = createSelector(
  selectLoginState,
  (state: LoginState) => state.isAuthenticated
);

// Selector to get the JWT token
export const selectAuthToken = createSelector(
  selectLoginState,
  (state: LoginState) => state.token
);

// Selector to get any login error
export const selectLoginError = createSelector(
  selectLoginState,
  (state: LoginState) => state.error
);
