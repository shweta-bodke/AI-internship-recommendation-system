import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-openings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './opening.html',
  styleUrl: './opening.css'
})

export class Openings {

  searchText = '';

  selectedLocation = '';

  selectedType = '';

  selectedDomain = '';

  internships = [

    {
      id:1,
      title:'AI/ML Intern',
      company:'ISRO',
      type:'Government',
      domain:'AI/ML',
      location:'Bangalore',
      stipend:'₹18,000/month',
      degree:'BCA / MCA / BTech',
      skills:['Python','AI','Machine Learning'],
      match:'78%'
    },

    {
      id:2,
      title:'Cyber Security Intern',
      company:'DRDO',
      type:'Government',
      domain:'Cyber Security',
      location:'Hyderabad',
      stipend:'₹20,000/month',
      degree:'BCA / BTech',
      skills:['Networking','Linux'],
      match:'75%'
    },

    {
      id:3,
      title:'Data Analyst Intern',
      company:'Infosys',
      type:'Private',
      domain:'Data Science',
      location:'Pune',
      stipend:'₹25,000/month',
      degree:'BCA / MCA',
      skills:['SQL','Power BI'],
      match:'72%'
    },

    {
      id:4,
      title:'Cloud Computing Intern',
      company:'Amazon AWS',
      type:'Private',
      domain:'Cloud',
      location:'Remote',
      stipend:'₹30,000/month',
      degree:'BCA / MCA / BTech',
      skills:['AWS','Cloud'],
      match:'69%'
    }

  ];

  get filteredInternships(){

    return this.internships.filter(job => {

      const matchesSearch =
      job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||

      job.company.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesLocation =
      this.selectedLocation === '' ||
      job.location === this.selectedLocation;

      const matchesType =
      this.selectedType === '' ||
      job.type === this.selectedType;

      const matchesDomain =
      this.selectedDomain === '' ||
      job.domain === this.selectedDomain;

      return matchesSearch &&
             matchesLocation &&
             matchesType &&
             matchesDomain;

    });

  }

}