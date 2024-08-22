import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/login-state.interface';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login API] Login Success',
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  '[Login API] Login Failure',
  props<{ error: string }>()
);
