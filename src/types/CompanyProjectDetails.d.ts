export interface CompanyProjectContribution {
  responsibility: string; // e.g. "Built authentication system", "Integrated payment gateway"
  description: string;
  technologiesUsed: string[]; // Optional if specific to this contribution
}

export interface CompanyProject {
  id: string;
  title: string;
  type: string; // e.g., "Client Work", "Internal Tool", etc.
  shortDescription: string;
  longDescription: string;
  stack: string[]; // overall tech stack
  companyName: string;
  associatedWithCompany: true;
  teamSize: number;
  role: string; // your role in the team, e.g. "Frontend Developer"
  responsibilities: string[]; // broader list of what you were responsible for
  contributions: CompanyProjectContribution[]; // detailed contributions
  challengesFaced: string[];
  lessonsLearned: string[];
  skillsGained: string[];
  lacking: string; // what skill or knowledge you felt was missing
  futurePlan?: string; // optional, if there's ongoing work or improvements
  github?: string; // might not always be public
  liveLinks?: string[]; // staging/demo links, if allowed
  year:string;
  images?: string[];
  createdAt?: string; // ISO date
  updatedAt?: string; // ISO date
}
