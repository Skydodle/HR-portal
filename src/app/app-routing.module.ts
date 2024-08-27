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
import { AuthGuard } from './auth.guard';
import { LoginGuard } from './login.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'employee-profiles', component: EmployeeProfilesComponent },
      { path: 'employee-profiles/:id', component: EmployeeProfileDetailComponent },
      { path: 'visa-status-management', component: VisaStatusManagementComponent },
      { path: 'hiring-management', component: HiringManagementComponent },
      { path: 'housing-management', component: HousingManagementComponent },
      { path: 'housing-detail/:id', component: HousingDetailComponent },
    ]
  },
  {
    path: '',
    component: NoNavbarLayoutComponent,
    children: [
      { path: 'onboarding-employee-profile/:userId', component: OnboardingEmployeeProfileComponent, canActivate: [AuthGuard] },
      { path: 'onboarding-applications', component: OnboardingApplicationComponent, canActivate: [AuthGuard] },
      { path: 'onboarding-employee-approved-profile/:userId', component: OnboardingEmployeeApprovedProfileComponent, canActivate: [AuthGuard] },
      { path: 'onboarding-employee-rejected-profile/:userId', component: OnboardingEmployeeRejectedProfileComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent,canActivate: [LoginGuard] },
    ]
  },
  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
