export interface AboutMe {
  name: string;
  currentPosition: string;
  brief: string;
  location?: string;
  contactEmail?: string;

  workExperience: WorkExperience[];
  education: Education[];
  profiles: ProfileLink[];
  certificates: Certificate[];

  skills: SkillGroups;
  interpersonalSkills: InterpersonalSkill[];

  extracurriculars: Extracurricular[];
  hobbies: string[];
  interests: string[];

  // Optional Add-ons
  publications?: Publication[];
  volunteering?: Volunteering[];
  awards?: Award[];
}

// -------------------------
// Work Experience
// -------------------------
export interface WorkExperience {
  companyName: string;
  position: string;
  workPeriod: {
    start: string; // YYYY-MM format
    end?: string; // or "Present"
  };
  location?: string;
  responsibilities: string[];
  projectsWorkedOn: string[];
  skillsGained: string[];
  techStack: string[];
}

// -------------------------
// Education
// -------------------------
export interface Education {
  degreeName: string;
  institutionName: string;
  grade?: string;
  institutionLink?: string;
  year: {
    start: string; // YYYY
    end: string; // YYYY
  };
}

// -------------------------
// Profiles (GitHub, LinkedIn, etc.)
// -------------------------
export interface ProfileLink {
  platform: string; // e.g., "GitHub", "LinkedIn", "LeetCode"
  url: string;
  username?: string;
}

// -------------------------
// Certificates
// -------------------------
export interface Certificate {
  courseName: string;
  certificateLink?: string;
  skillsGained: string[];
  issuedBy?: string;
  year?: string;
}

// -------------------------
// Skills
// -------------------------
export interface SkillGroups {
  languages: LanguageSkill[];
  softSkills: SoftSkill[];
  hardSkills: HardSkill[];
}

export interface LanguageSkill {
  name: string;
  read: boolean;
  write: boolean;
  speak: boolean;
  understand: boolean;
}

export interface SoftSkill {
  name: string;
  level: number; // percentage or 0-100 scale
}

export interface HardSkill {
  name: string;
  level?: number; // optional proficiency level
}

// -------------------------
// Interpersonal Skills
// -------------------------
export interface InterpersonalSkill {
  name: string;
  description?: string;
}

// -------------------------
// Extracurricular Activities
// -------------------------
export interface Extracurricular {
  title: string;
  description: string;
  year?: string;
  relatedLinks?: string[];
}

// -------------------------
// Optional Add-ons
// -------------------------

export interface Publication {
  title: string;
  publisher: string;
  date: string; // YYYY-MM
  link?: string;
  summary?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  start: string;
  end?: string;
  description?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}
