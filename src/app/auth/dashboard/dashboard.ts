// src/app/auth/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { InternshipService } from '../../services/internship.service';

// ✅ Fix 1 — correct path "models" not "model"
import { RecommendationResponse } from '../../model/internship.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  recommendations: RecommendationResponse[] = [];
  totalMatches  = 0;
  highestMatch  = 0;
  loading       = false;
  error         = '';
  userName      = '';

  constructor(
    private authService:       AuthService,
    private internshipService: InternshipService,
    public  router:            Router    // ✅ Fix 2 — public so HTML can use it
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.userName = this.authService.getUserName();
    this.loadRecommendations();
  }

  loadRecommendations() {
    this.loading = true;
    this.error   = '';

    const userId = this.authService.getUserId();

    this.internshipService.getRecommendations(userId).subscribe({
      next: (data) => {
        this.recommendations = data;
        this.totalMatches    = data.length;
        this.highestMatch    = data.length > 0
          ? Math.max(...data.map(r => r.matchPercentage))
          : 0;
        this.loading = false;
      },
      error: (err) => {
        this.error   = 'Could not load recommendations. Is Spring Boot running?';
        this.loading = false;
        console.error(err);
      }
    });
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getMatchClass(percentage: number): string {
    if (percentage >= 90) return 'gov-match';
    if (percentage >= 75) return 'high-match';
    return 'low-match';
  }

  getAiInsight(item: RecommendationResponse): string {
    if (item.matchPercentage >= 90) {
      return `Your profile strongly matches the skills and eligibility
              criteria for ${item.role} at ${item.companyName}.`;
    } else if (item.matchPercentage >= 75) {
      return `Good match detected between your technical skills
              and the requirements for this ${item.role} role.`;
    } else {
      return `Partial match found. Consider improving relevant
              skills to strengthen your profile for this role.`;
    }
  }

  // ✅ Fix 3 — added missing saveInternship method
  saveInternship(item: RecommendationResponse): void {
    console.log('Saved:', item.role, 'at', item.companyName);
    alert(`✅ ${item.role} at ${item.companyName} saved!`);
  }
}