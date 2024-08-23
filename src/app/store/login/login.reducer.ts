import { createReducer, on } from '@ngrx/store';
import { LoginState } from 'src/app/interfaces/login-state.interface';
import * as LoginActions from './login.actions';

export const initialState: LoginState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    error: null,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    error,
  }))
);
