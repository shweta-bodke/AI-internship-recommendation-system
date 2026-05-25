// src/app/services/internship.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Internship, RecommendationResponse } 
  from '../model/internship.model';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  private baseUrl = 'http://localhost:8083/internship';

  constructor(private http: HttpClient) {}

  // GET /internship/all → openings page uses this
  getAllInternships(): Observable<Internship[]> {
    return this.http.get<Internship[]>(`${this.baseUrl}/all`);
  }

  // GET /internship/recommend/{userId} → dashboard uses this
  getRecommendations(userId: number): Observable<RecommendationResponse[]> {
    return this.http.get<RecommendationResponse[]>(
      `${this.baseUrl}/recommend/${userId}`
    );
  }

  // GET /internship/{id} → internship-details page uses this
  getInternshipById(id: number): Observable<Internship> {
    return this.http.get<Internship>(`${this.baseUrl}/${id}`);
  }
}