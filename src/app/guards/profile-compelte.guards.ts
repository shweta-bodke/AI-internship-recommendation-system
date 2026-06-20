// src/app/guards/profile-complete.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class ProfileCompleteGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return of(false);
    }

    const userId = this.authService.getUserId();

    return this.authService.getUserById(userId).pipe(
      map(user => {
        if (this.authService.isProfileComplete(user)) {
          return true;   // ✅ allowed to enter dashboard/opening/applied
        }
        this.router.navigate(['/profile']);   // ❌ blocked, send to profile
        return false;
      }),
      catchError(() => {
        // If the check itself fails, fail safe → send to profile
        this.router.navigate(['/profile']);
        return of(false);
      })
    );
  }
}