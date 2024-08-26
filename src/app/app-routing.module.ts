import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { EmployeeProfilesComponent } from './component/employee-profiles/employee-profiles.component';
import { EmployeeProfileDetailComponent } from './component/employee-profile-detail/employee-profile-detail.component';
import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';
import { HiringManagementComponent } from './component/hiring-management/hiring-management.component';
import { HousingManagementComponent } from './component/housing-management/housing-management.component';
import { HousingDetailComponent } from './component/housing-detail/housing-detail.component';
import { OnboardingApplicationComponent } from './component/onboarding-application/onboarding-application.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent },
  { path: 'employee-profiles', component: EmployeeProfilesComponent },
  { path: 'employee-profiles/:id', component: EmployeeProfileDetailComponent },
  { path: 'visa-status-management', component: VisaStatusManagementComponent },
  { path: 'hiring-management', component: HiringManagementComponent },
  { path: 'housing-management', component: HousingManagementComponent },
  { path: 'housing-detail/:id', component: HousingDetailComponent },
  {
    path: 'onboarding-applications',
    component: OnboardingApplicationComponent,
  },
  { path: '**', redirectTo: '/login' }, // Wildcard route redirects to login (for any unmatched routes)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
