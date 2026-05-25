// src/app/auth/openings/openings.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InternshipService } from '../../services/internship.service';
import { Internship } from '../../model/internship.model';

@Component({
  selector: 'app-openings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './opening.html',
  styleUrl: './opening.css'
})
export class OpeningsComponent implements OnInit {

  // ── Filters ─────────────────────────────────────
  searchText       = '';
  selectedLocation = '';
  selectedType     = '';
  selectedDomain   = '';

  // ── Real data from API ───────────────────────────
  internships: Internship[] = [];
  loading = false;
  error   = '';

  constructor(private internshipService: InternshipService) {}

  ngOnInit() {
    this.loadInternships();
  }

  loadInternships() {
    this.loading = true;
    this.error   = '';

    this.internshipService.getAllInternships().subscribe({
      next: (data) => {
        this.internships = data;
        this.loading     = false;
      },
      error: (err) => {
        this.error   = 'Could not load internships. Is Spring Boot running?';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ── Filter logic using real field names ──────────
  get filteredInternships(): Internship[] {
    return this.internships.filter(job => {

      // Search by role or companyName
      const matchesSearch =
        !this.searchText ||
        job.role.toLowerCase()
           .includes(this.searchText.toLowerCase()) ||
        job.companyName.toLowerCase()
           .includes(this.searchText.toLowerCase());

      // Filter by location
      const matchesLocation =
        !this.selectedLocation ||
        job.location === this.selectedLocation;

      // Filter by degree
      const matchesDomain =
        !this.selectedDomain ||
        job.requiredSkills.toLowerCase()
           .includes(this.selectedDomain.toLowerCase());

      return matchesSearch && matchesLocation && matchesDomain;
    });
  }

  // ── Split skills string into array for *ngFor ────
  getSkillsList(requiredSkills: string): string[] {
    return requiredSkills
      ? requiredSkills.split(',').map(s => s.trim())
      : [];
  }

  saveInternship(job: Internship) {
    alert(`✅ ${job.role} at ${job.companyName} saved!`);
  }
}