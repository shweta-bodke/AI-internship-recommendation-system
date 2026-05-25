// src/app/auth/applied/applied.ts

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applied',          // ✅ Fixed selector
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './applied.html',
  styleUrl: './applied.css'
})
export class AppliedComponent implements OnInit {

  // Applied internships list
  appliedList: any[] = [];

  // Stats calculated from real list
  totalApplied       = 0;
  underReview        = 0;
  interviewScheduled = 0;
  selected           = 0;

  ngOnInit() {
    this.loadAppliedInternships();
  }

  loadAppliedInternships() {

    // Load from localStorage for now
    // When backend is ready → replace with API call
    const saved = localStorage.getItem('appliedInternships');
    this.appliedList = saved ? JSON.parse(saved) : [];

    // Calculate stats from real data
    this.totalApplied       = this.appliedList.length;
    this.underReview        = this.appliedList
      .filter(i => i.status === 'Under Review').length;
    this.interviewScheduled = this.appliedList
      .filter(i => i.status === 'Interview Scheduled').length;
    this.selected           = this.appliedList
      .filter(i => i.status === 'Selected').length;
  }

  // ── Called from internship-details page when Apply clicked ──
  // This method saves to localStorage
  // Future: replace localStorage with API call
  static applyForInternship(internship: any) {
    const saved = localStorage.getItem('appliedInternships');
    const list  = saved ? JSON.parse(saved) : [];

    // Check if already applied
    const alreadyApplied = list.find(
      (i: any) => i.internshipId === internship.id
    );

    if (!alreadyApplied) {
      list.push({
        internshipId: internship.id,
        role:         internship.role,
        companyName:  internship.companyName,
        location:     internship.location,
        stipend:      internship.stipend,
        appliedOn:    new Date().toLocaleDateString('en-IN'),
        status:       'Applied'    // default status
      });
      localStorage.setItem('appliedInternships', JSON.stringify(list));
      return true;   // successfully applied
    }
    return false;    // already applied
  }

  // ── Withdraw application ────────────────────────
  withdraw(internshipId: number) {
    const confirm = window.confirm(
      'Are you sure you want to withdraw this application?'
    );
    if (confirm) {
      this.appliedList = this.appliedList.filter(
        i => i.internshipId !== internshipId
      );
      localStorage.setItem(
        'appliedInternships',
        JSON.stringify(this.appliedList)
      );
      this.loadAppliedInternships(); // recalculate stats
    }
  }

  // ── Badge CSS class based on status ─────────────
  getStatusClass(status: string): string {
    switch(status) {
      case 'Selected':            return 'status selected';
      case 'Interview Scheduled': return 'status interview';
      case 'Under Review':        return 'status review';
      default:                    return 'status applied';
    }
  }

  // ── Progress bar CSS class based on status ──────
  getProgressClass(status: string): string {
    switch(status) {
      case 'Selected':            return 'progress-fill selected-fill';
      case 'Interview Scheduled': return 'progress-fill interview-fill';
      case 'Under Review':        return 'progress-fill review-fill';
      default:                    return 'progress-fill applied-fill';
    }
  }

  // ── Description based on status ─────────────────
  getStatusDescription(status: string, company: string): string {
    switch(status) {
      case 'Selected':
        return `Congratulations! You have been selected for
                the internship at ${company}.`;
      case 'Interview Scheduled':
        return `Congratulations! Your interview has been
                scheduled for the next round at ${company}.`;
      case 'Under Review':
        return `Your application is currently being reviewed
                by the recruitment team at ${company}.`;
      default:
        return `Your application has been successfully
                submitted to ${company}.`;
    }
  }
}