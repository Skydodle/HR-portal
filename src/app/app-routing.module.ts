import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { NoNavbarLayoutComponent } from './component/no-navbar-layout/no-navbar-layout.component';
import { LoginComponent } from './component/login/login.component';
import { EmployeeProfilesComponent } from './component/employee-profiles/employee-profiles.component';
import { EmployeeProfileDetailComponent } from './component/employee-profile-detail/employee-profile-detail.component';
import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';
import { HiringManagementComponent } from './component/hiring-management/hiring-management.component';
import { HousingManagementComponent } from './component/housing-management/housing-management.component';
import { HousingDetailComponent } from './component/housing-detail/housing-detail.component';
import { OnboardingApplicationComponent } from './component/onboarding-application/onboarding-application.component';
import { OnboardingEmployeeProfileComponent } from './component/onboarding-employee-profile/onboarding-employee-profile.component';
import { OnboardingEmployeeApprovedProfileComponent } from './component/onboarding-employee-approved-profile/onboarding-employee-approved-profile.component';
import { OnboardingEmployeeRejectedProfileComponent } from './component/onboarding-employee-rejected-profile/onboarding-employee-rejected-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'employee-profiles', component: EmployeeProfilesComponent },
      { path: 'employee-profiles/:id', component: EmployeeProfileDetailComponent },
      { path: 'visa-status-management', component: VisaStatusManagementComponent },
      { path: 'hiring-management', component: HiringManagementComponent },
      { path: 'housing-management', component: HousingManagementComponent },
      { path: '**', redirectTo: '/login' }
    ]
  },
  {
    path: '',
    component: NoNavbarLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'onboarding-employee-profile/:userId', component: OnboardingEmployeeProfileComponent },
      { path: 'onboarding-applications', component: OnboardingApplicationComponent },
      { path: 'onboarding-employee-approved-profile/:userId', component: OnboardingEmployeeApprovedProfileComponent },
      { path: 'onboarding-employee-rejected-profile/:userId', component: OnboardingEmployeeRejectedProfileComponent },
      { path: 'housing-detail/:id', component: HousingDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
