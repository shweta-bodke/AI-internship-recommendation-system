import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { Profile } from './auth/profile/profile';
import { Dashboard } from './auth/dashboard/dashboard';
import { RecommendationList } from './auth/recommendation-list/recommendation-list';
import { InternshipDetails } from './auth/internship-details/internship-details';
import { Openings} from './auth/opening/opening';
import { Applied} from './auth/applied/applied';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: Signup
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'profile',
    component: Profile
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
  path: 'internship-details/:id',
  component: InternshipDetails
},

  {
    path: 'recommendations',
    component: RecommendationList
  },

  {
    path: 'openings',
    component: Openings
  },
  {
    path: 'applied',
    component: Applied
  }

];