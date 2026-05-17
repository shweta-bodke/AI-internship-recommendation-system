import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,

  imports: [
    RouterLink,
    FormsModule
  ],

  templateUrl: './signup.html',
  styleUrl: './signup.css',
})

export class Signup {

  constructor(private router: Router) {}

  user = {
    fullname: '',
    email: '',
    phone: '',
    password: ''
  };

  register() {

    console.log(this.user);

    // Redirect to dashboard
    this.router.navigate(['/login']);

  }

}