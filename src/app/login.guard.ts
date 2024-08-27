import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.checkTokenValidity()) {
      // Redirect authenticated users to employee-profiles
      return this.router.createUrlTree(['/employee-profiles']);
    } else {
      // Allow access to the login page for unauthenticated users
      return true;
    }
  }
}
