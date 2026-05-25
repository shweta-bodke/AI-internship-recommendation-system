// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, LoginRequest } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) {}

  // ── API CALLS ──────────────────────────────────────

  // POST /api/register → signup page uses this
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  // POST /api/login → login page uses this
  login(request: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, request);
  }

  // PUT /api/profile/{id} → profile page uses this
  updateProfile(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/profile/${id}`, user);
  }

  // GET /api/{id} → profile page uses this to load data
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // ── LOCAL STORAGE ──────────────────────────────────
  // These save/read user info in browser memory after login

  saveUserToStorage(user: User): void {
    localStorage.setItem('userId',    user.id.toString());
    localStorage.setItem('userName',  user.name);
    localStorage.setItem('userEmail', user.email);
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId'));
  }

  getUserName(): string {
    return localStorage.getItem('userName') || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  logout(): void {
    localStorage.clear();
  }
}