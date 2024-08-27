import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'; // Import LoginService
import { Router } from '@angular/router'; // Import Router



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    // Placeholder function for now
    this.loginService.logout();
  }
}
