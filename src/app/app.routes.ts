// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent}             from './auth/login/login';
import { SignupComponent}            from './auth/signup/signup';
import { DashboardComponent }         from './auth/dashboard/dashboard';
import { OpeningsComponent }          from './auth/opening/opening';
import { InternshipDetailsComponent } from './auth/internship-details/internship-details';
import { ProfileComponent }           from './auth/profile/profile';

export const routes: Routes = [
  { path: '',                   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',              component: LoginComponent },
  { path: 'signup',             component: SignupComponent },
  { path: 'dashboard',          component: DashboardComponent },
  { path: 'opening',           component: OpeningsComponent },
  { path: 'internship-details/:id', component: InternshipDetailsComponent },
  { path: 'profile',            component: ProfileComponent }
];