// src/app/auth/signup/signup.ts

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';       // ← add this
import { FormsModule } from '@angular/forms';          // ← add this
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,    // ← fixes *ngIf errors
    FormsModule      // ← fixes [(ngModel)] and ngForm errors
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  name     = '';
  email    = '';
  password = '';
  phone    = '';
  error    = '';
  success  = '';
  loading  = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.loading = true;
    this.error   = '';
    this.success = '';

    const newUser: any = {
      name:     this.name,
      email:    this.email,
      password: this.password,
      phone:    this.phone
    };

    this.authService.register(newUser).subscribe({
      next: () => {
        this.success = 'Account created! Redirecting to login...';
        this.loading = false;
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.error   = 'Registration failed. Email may already exist.';
        this.loading = false;
      }
    });
  }
}