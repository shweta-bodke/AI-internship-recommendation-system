// src/app/auth/login/login.ts

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';       // ← add this
import { FormsModule } from '@angular/forms';          // ← add this
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,    // ← fixes *ngIf errors
    FormsModule      // ← fixes [(ngModel)] and ngForm errors
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email    = '';
  password = '';
  error    = '';
  loading  = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    if (!this.email || !this.password) {
      this.error = 'Please enter email and password.';
      return;
    }
    this.loading = true;
    this.error   = '';

    this.authService.login({
      email:    this.email,
      password: this.password
    }).subscribe({
      next: (user) => {
        this.authService.saveUserToStorage(user);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = err.status === 401
          ? 'Invalid email or password.'
          : 'Login failed. Make sure Spring Boot is running.';
        this.loading = false;
      }
    });
  }
}