import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EmployeeProfilesComponent } from './component/employee-profiles/employee-profiles.component';
import { EmployeeProfileDetailComponent } from './component/employee-profile-detail/employee-profile-detail.component';
import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';
import { HiringManagementComponent } from './component/hiring-management/hiring-management.component';
import { OnboardingApplicationComponent } from './component/onboarding-application/onboarding-application.component';
import { HousingManagementComponent } from './component/housing-management/housing-management.component';
import { HousingDetailComponent } from './component/housing-detail/housing-detail.component';
import { InProcessComponent } from './component/in-process/in-process.component';
import { AllEmployeesComponent } from './component/all-employees/all-employees.component'
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login/login.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { loginReducer } from './store/login/login.reducer';
import { LoginTestComponent } from './loginTest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfilesSummaryComponent } from './component/employee-profiles-summary/employee-profiles-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeProfilesComponent,
    EmployeeProfileDetailComponent,
    VisaStatusManagementComponent,
    HiringManagementComponent,
    OnboardingApplicationComponent,
    HousingManagementComponent,
    HousingDetailComponent,
    InProcessComponent,
    AllEmployeesComponent,
    LoginTestComponent,
    EmployeeProfilesSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ login: loginReducer }), // store module for ngrx
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([LoginEffects]), // effects module
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule, // import material module
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// purpose for each component
// 1. Login Component
// Purpose: Handle login for both employees and HR. The system should detect the role (HR or employee) based on the account information.

// 2. Navigation Bar Component
// Purpose: Provide navigation links to different sections such as Home, Employee Profiles, Visa Status Management, Hiring Management, and Housing Management.

// 3. Employee Profiles Component
// Purpose: Display a summary of employee profiles, allow searching for employees, and viewing detailed profiles.

// 4. Employee Profile Detail Component
// Purpose: Display the entire profile of an employee when a name link is clicked in the summary view.

// 5. Visa Status Management Component
// Purpose: Manage and view the visa status of employees, including approving or rejecting documents and sending notifications.

// 6. Visa Status Detail Component
// Purpose: Display detailed visa status information and manage specific actions for each employee.

// 7. Hiring Management Component
// Purpose: Manage hiring-related tasks, such as generating registration tokens and reviewing onboarding applications.

// 8. Onboarding Application Component
// Purpose: View and manage onboarding applications in different statuses (Pending, Rejected, Approved).

// 9. Housing Management Component
// Purpose: Manage housing information, including viewing, adding, and deleting houses.

// 10. Housing Detail Component
// Purpose: Display detailed information about a house, including facility and resident details.

