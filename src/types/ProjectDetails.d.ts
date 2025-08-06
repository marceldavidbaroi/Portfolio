export interface ProjectFeature {
  name: string;
  description: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  stack: string[];
  problemSolved: string;
  reasonToBuild: string;
  features: ProjectFeature[];
  skillsGained: string[];
  lacking: string;
  futurePlan: string;
  github: string;
  liveLinks: string[];
  images: string[];
  associatedWithCompany: boolean;
  companyName?: string | null;
  challengesFaced: string[];
lessonsLearned: string[];
  role: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}
