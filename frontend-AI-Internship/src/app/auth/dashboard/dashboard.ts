import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  internships = [
  {
    title: 'Data Analyst Intern',
    company: 'Infosys',
    type: 'Private (MNC)',
    skills: ['Python', 'SQL', 'Power BI'],
    location: 'Pune',
    stipend: '₹15,000/month',
    match: 92,
    matchColor: 'bg-success'
  },
  {
    title: 'AI/ML Intern',
    company: 'TCS',
    type: 'Private (MNC)',
    skills: ['Python', 'Machine Learning'],
    location: 'Bangalore',
    stipend: '₹20,000/month',
    match: 88,
    matchColor: 'bg-warning text-dark'
  },
  {
    title: 'Software Development Intern',
    company: 'Wipro',
    type: 'Private (MNC)',
    skills: ['Java', 'Spring Boot', 'SQL'],
    location: 'Hyderabad',
    stipend: '₹18,000/month',
    match: 85,
    matchColor: 'bg-success'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Zoho',
    type: 'Private (Product Company)',
    skills: ['Angular', 'HTML', 'CSS', 'TypeScript'],
    location: 'Chennai',
    stipend: '₹12,000/month',
    match: 80,
    matchColor: 'bg-info'
  },
  {
    title: 'Data Science Intern',
    company: 'Accenture',
    type: 'Private (Consulting)',
    skills: ['Python', 'Statistics', 'Machine Learning'],
    location: 'Mumbai',
    stipend: '₹25,000/month',
    match: 90,
    matchColor: 'bg-success'
  },
  {
    title: 'Cyber Security Intern',
    company: 'IBM',
    type: 'Private (MNC)',
    skills: ['Networking', 'Security Basics', 'Linux'],
    location: 'Remote',
    stipend: '₹22,000/month',
    match: 78,
    matchColor: 'bg-warning text-dark'
  },
  {
    title: 'Banking Operations Intern',
    company: 'SBI',
    type: 'Government (PSU)',
    skills: ['Finance Basics', 'Excel', 'Accounting'],
    location: 'Delhi',
    stipend: '₹10,000/month',
    match: 75,
    matchColor: 'bg-primary'
  },
  {
    title: 'Railway IT Intern',
    company: 'Indian Railways',
    type: 'Government',
    skills: ['Basic Programming', 'Database', 'Networking'],
    location: 'Pan India',
    stipend: '₹8,000/month',
    match: 70,
    matchColor: 'bg-primary'
  },
  {
    title: 'Digital Marketing Intern',
    company: 'Startup - Growthify',
    type: 'Startup',
    skills: ['SEO', 'Content Writing', 'Social Media'],
    location: 'Remote',
    stipend: '₹5,000 - ₹12,000/month',
    match: 82,
    matchColor: 'bg-info'
  },
  {
    title: 'Cloud Computing Intern',
    company: 'Amazon AWS',
    type: 'Private (MNC)',
    skills: ['Cloud Basics', 'AWS', 'Linux'],
    location: 'Hyderabad',
    stipend: '₹30,000/month',
    match: 95,
    matchColor: 'bg-success'
  },
  {
  title: 'NIC (National Informatics Centre) Internship',
  company: 'Ministry of Electronics & IT (MeitY)',
  type: 'Government (Central)',
  skills: ['Programming', 'Database', 'Web Development'],
  location: 'Delhi / Remote',
  stipend: '₹10,000 - ₹15,000/month',
  match: 85,
  matchColor: 'bg-primary'
},
{
  title: 'ISRO Student Internship Program',
  company: 'Indian Space Research Organisation',
  type: 'Government (Research)',
  skills: ['Python', 'Physics Basics', 'Data Analysis'],
  location: 'Bangalore / ISRO Centres',
  stipend: '₹12,000/month',
  match: 90,
  matchColor: 'bg-success'
},
{
  title: 'DRDO Internship Programme',
  company: 'Defence Research and Development Organisation',
  type: 'Government (Defense)',
  skills: ['Engineering Basics', 'AI/ML', 'C++'],
  location: 'Across India Labs',
  stipend: '₹15,000/month',
  match: 88,
  matchColor: 'bg-success'
},
{
  title: 'NITI Aayog Internship',
  company: 'Government of India',
  type: 'Government (Policy)',
  skills: ['Research', 'MS Office', 'Data Analysis'],
  location: 'Delhi',
  stipend: '₹10,000/month',
  match: 82,
  matchColor: 'bg-primary'
},
{
  title: 'RBI Internship Program',
  company: 'Reserve Bank of India',
  type: 'Government (Finance)',
  skills: ['Economics', 'Finance', 'Excel'],
  location: 'Mumbai',
  stipend: '₹20,000/month',
  match: 87,
  matchColor: 'bg-warning text-dark'
},
{
  title: 'SEBI Internship Scheme',
  company: 'Securities and Exchange Board of India',
  type: 'Government (Finance Regulator)',
  skills: ['Finance', 'Economics', 'Data Analysis'],
  location: 'Mumbai',
  stipend: '₹15,000/month',
  match: 84,
  matchColor: 'bg-primary'
},
{
  title: 'Bharat Electronics Limited Internship',
  company: 'BEL (PSU)',
  type: 'Government PSU',
  skills: ['Electronics', 'C Programming', 'Embedded Systems'],
  location: 'Bangalore',
  stipend: '₹12,000/month',
  match: 80,
  matchColor: 'bg-info'
},
{
  title: 'ONGC Internship Program',
  company: 'Oil and Natural Gas Corporation',
  type: 'Government PSU',
  skills: ['Mechanical', 'Engineering Basics', 'Data Analysis'],
  location: 'Pan India',
  stipend: '₹10,000 - ₹18,000/month',
  match: 78,
  matchColor: 'bg-info'
},
{
  title: 'Digital India Internship',
  company: 'Ministry of Electronics & IT',
  type: 'Government Scheme',
  skills: ['Digital Marketing', 'IT Basics', 'Communication'],
  location: 'Remote',
  stipend: '₹8,000 - ₹12,000/month',
  match: 83,
  matchColor: 'bg-primary'
},
{
  title: 'MyGov Internship Program',
  company: 'Government of India',
  type: 'Government Platform',
  skills: ['Content Writing', 'Social Media', 'Research'],
  location: 'Remote',
  stipend: '₹5,000 - ₹10,000/month',
  match: 75,
  matchColor: 'bg-secondary'
}
];

  saveInternship(job: any)  {
    console.log('Saved:', job);
  }
}