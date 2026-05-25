export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  phone: string;

  // Personal
  address: string;
  gender: string;
  dateOfBirth: string;
  location: string;

  // Education
  collegeName: string;
  currentDegree: string;
  specialization: string;
  cgpa: number;
  passingYear: number;
  twelfthPercentage: number;
  tenthPercentage: number;

  // Skills
  technicalSkills: string;
  projectSummary: string;
  githubLink: string;
  linkedinLink: string;

  // Resume
  certifications: string;
  resumePath: string;

  // Preferences
  preferredInternshipRole: string;
  preferredLocation: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}