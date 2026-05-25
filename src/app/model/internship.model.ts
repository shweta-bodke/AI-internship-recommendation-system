export interface Internship {
  id: number;
  companyName: string;
  role: string;
  requiredSkills: string;
  location: string;
  stipend: number;
  minimumCgpa: number;
  eligibleDegree: string;
  description: string;
}

export interface RecommendationResponse {
  companyName: string;
  role: string;
  location: string;
  stipend: number;
  matchPercentage: number;
}