import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-profile',

  standalone: true,

  imports: [
    RouterLink,
    FormsModule
  ],

  templateUrl: './profile.html',

  styleUrl: './profile.css',
})

export class Profile {

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  userData = {

    skills: '',

    cgpa: '',

    interests: '',

    branch: ''

  };
  submitProfile() {

  console.log(this.userData);

  // Direct redirect
  this.router.navigate(['/dashboard']);

}
}