export interface ProjectFeature {
  name: string;
  description: string;
  images?: string[];
}

export interface PersonalProject {
  id: string;
  title: string;
  type: string;
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
  year: string;
  role: string;
  createdAt?: string | null; // ISO date
  updatedAt?: string | null; // ISO date
}
