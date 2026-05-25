// src/app/auth/internship-details/internship-details.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// ← RouterLink removed from imports array since it's not used in template
import { InternshipService } from '../../services/internship.service';
import { Internship } from '../../model/internship.model';
import { AppliedComponent } from '../applied/applied';

@Component({
  selector: 'app-internship-details',
  standalone: true,
  imports: [
    CommonModule     // ← RouterLink removed, was causing warning
  ],
  templateUrl: './internship-details.html',
  styleUrl: './internship-details.css'
})
export class InternshipDetailsComponent implements OnInit {

  internship: Internship | null = null;
  skillsList: string[] = [];
  loading = false;
  error   = '';

  constructor(
    private route:             ActivatedRoute,
    private router:            Router,
    private internshipService: InternshipService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'Invalid internship ID.';
      return;
    }
    this.loadInternship(id);
  }

  loadInternship(id: number) {
    this.loading = true;
    this.error   = '';

    this.internshipService.getInternshipById(id).subscribe({
      next: (data) => {
        this.internship = data;
        this.skillsList = data.requiredSkills
          ? data.requiredSkills.split(',').map(s => s.trim())
          : [];
        this.loading = false;
      },
      error: () => {
        this.error   = 'Could not load internship details.';
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  applyNow() {
  if (!this.internship) return;

  const success = AppliedComponent.applyForInternship(this.internship);

  if (success) {
    alert(`✅ Successfully applied for ${this.internship.role}!`);
  } else {
    alert(`⚠️ You have already applied for ${this.internship.role}.`);
  }
}

  saveInternship() {
    alert(`${this.internship?.role} saved successfully!`);
  }
}