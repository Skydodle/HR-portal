import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginService } from '../../services/login.service';
import * as LoginActions from './login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      mergeMap((action) =>
        this.loginService
          .login(action.username, action.email, action.password)
          .pipe(
            map((response) => {
              const { token, user } = response;
              // store token in local storage
              localStorage.setItem('token', token);
              // also store token and user info in ngrx state
              return LoginActions.loginSuccess({ user, token });
            }),
            catchError((error) => {
              let errorMessage = 'An unknown error occurred';
              if (error.error && error.error.message) {
                errorMessage = error.error.message; // Extracting the specific error message from the response
              } else if (error.message) {
                errorMessage = error.message;
              }
              return of(LoginActions.loginFailure({ error: errorMessage }));
            })
          )
      )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
