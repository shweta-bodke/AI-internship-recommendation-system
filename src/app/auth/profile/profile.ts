// src/app/auth/profile/profile.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ← RouterLink removed since profile uses (click) not routerLink
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/users.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,    // ← fixes *ngIf
    FormsModule      // ← fixes [(ngModel)]
    // RouterLink removed — was causing warning
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent implements OnInit {

  name                    = '';
  email                   = '';
  phone                   = '';
  dateOfBirth             = '';
  gender                  = '';
  location                = '';
  address                 = '';
  collegeName             = '';
  currentDegree           = '';
  specialization          = '';
  cgpa: number | null     = null;
  passingYear: number | null = null;
  tenthPercentage: number | null  = null;
  twelfthPercentage: number | null = null;
  technicalSkills         = '';
  projectSummary          = '';
  githubLink              = '';
  linkedinLink            = '';
  certifications          = '';
  preferredInternshipRole = '';
  preferredLocation       = '';

  loading = false;
  success = '';
  error   = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadProfile(userId);
    }
  }

  loadProfile(id: number) {
    this.authService.getUserById(id).subscribe({
      next: (user) => {
        this.name                    = user.name            || '';
        this.email                   = user.email           || '';
        this.phone                   = user.phone           || '';
        this.dateOfBirth             = user.dateOfBirth     || '';
        this.gender                  = user.gender          || '';
        this.location                = user.location        || '';
        this.address                 = user.address         || '';
        this.collegeName             = user.collegeName     || '';
        this.currentDegree           = user.currentDegree   || '';
        this.specialization          = user.specialization  || '';
        this.cgpa                    = user.cgpa            || null;
        this.passingYear             = user.passingYear     || null;
        this.tenthPercentage         = user.tenthPercentage || null;
        this.twelfthPercentage       = user.twelfthPercentage || null;
        this.technicalSkills         = user.technicalSkills || '';
        this.projectSummary          = user.projectSummary  || '';
        this.githubLink              = user.githubLink      || '';
        this.linkedinLink            = user.linkedinLink    || '';
        this.certifications          = user.certifications  || '';
        this.preferredInternshipRole = user.preferredInternshipRole || '';
        this.preferredLocation       = user.preferredLocation || '';
      },
      error: () => {
        this.error = 'Could not load profile data.';
      }
    });
  }

  saveProfile() {
    this.loading = true;
    this.success = '';
    this.error   = '';

    const userId = this.authService.getUserId();

    const updatedUser: Partial<User> = {
      name:                    this.name,
      email:                   this.email,
      phone:                   this.phone,
      dateOfBirth:             this.dateOfBirth,
      gender:                  this.gender,
      location:                this.location,
      address:                 this.address,
      collegeName:             this.collegeName,
      currentDegree:           this.currentDegree,
      specialization:          this.specialization,
      cgpa:                    this.cgpa ?? undefined,
      passingYear:             this.passingYear ?? undefined,
      tenthPercentage:         this.tenthPercentage ?? undefined,
      twelfthPercentage:       this.twelfthPercentage ?? undefined,
      technicalSkills:         this.technicalSkills,
      projectSummary:          this.projectSummary,
      githubLink:              this.githubLink,
      linkedinLink:            this.linkedinLink,
      certifications:          this.certifications,
      preferredInternshipRole: this.preferredInternshipRole,
      preferredLocation:       this.preferredLocation
    };

    this.authService.updateProfile(userId, updatedUser).subscribe({
      next: () => {
        this.success = '✅ Profile saved! Redirecting to dashboard...';
        this.loading = false;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      },
      error: () => {
        this.error   = 'Failed to save profile. Please try again.';
        this.loading = false;
      }
    });
  }
}