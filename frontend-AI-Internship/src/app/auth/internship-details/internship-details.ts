import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-internship-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './internship-details.html',
  styleUrl: './internship-details.css'
})

export class InternshipDetails {

  internshipId:any;

  internship:any;

  internships = [

    {
      id:1,
      title:'AI/ML Research Intern',
      company:'ISRO',
      location:'Bangalore',
      stipend:'₹18,000/month',
      match:'95%',
      description:'Work on AI and satellite research projects.',
      skills:['Python','AI','Machine Learning'],
      eligibility:'BCA / MCA / BTech',
      education:'CGPA above 8.0'
    },

    {
      id:2,
      title:'Data Analyst Intern',
      company:'Infosys',
      location:'Pune',
      stipend:'₹25,000/month',
      match:'92%',
      description:'Analyze business data using SQL and Power BI.',
      skills:['SQL','Power BI','Excel'],
      eligibility:'BCA / MCA',
      education:'CGPA above 7.5'
    },

    {
      id:3,
      title:'Cyber Security Intern',
      company:'DRDO',
      location:'Hyderabad',
      stipend:'₹20,000/month',
      match:'90%',
      description:'Work on cyber security and networking systems.',
      skills:['Cyber Security','Linux','Networking'],
      eligibility:'BCA / BTech',
      education:'CGPA above 7.8'
    },

    {
      id:4,
      title:'Cloud Computing Intern',
      company:'Amazon AWS',
      location:'Remote',
      stipend:'₹30,000/month',
      match:'89%',
      description:'Cloud infrastructure and AWS deployment.',
      skills:['AWS','Cloud','Python'],
      eligibility:'BCA / MCA / BTech',
      education:'CGPA above 7.0'
    }

  ];

  constructor(private route:ActivatedRoute){

    this.internshipId =
    this.route.snapshot.paramMap.get('id');

    this.internship =
    this.internships.find(
      x => x.id == this.internshipId
    );

  }

}