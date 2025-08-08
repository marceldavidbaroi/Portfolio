export interface AboutMe {
  name: string;
  currentPosition: string;
  brief: string; // short intro paragraph about yourself
  location?: string;
  contact?: ContactMethod[];
  profileImage: string;

  workExperience: WorkExperience[];
  education: Education[];
  profiles: ProfileLink[]; // GitHub, LinkedIn, etc.
  certificates: Certificate[];

  skills: SkillGroups; // languages, soft skills, hard skills
  interpersonalSkills: InterpersonalSkill[];

  extracurriculars: Extracurricular[];
  hobbies: string[];
  interests: string[];

  // Optional Add-ons
  publications?: Publication[];
  volunteering?: Volunteering[];
  awards?: Award[];

  // -------- Additional Helpful Fields --------
  spokenLanguages?: SpokenLanguageSkill[]; // Detailed spoken languages with proficiency
  availability?: "Open to Work" | "Freelance" | "Not Available";
  resumeLink?: string; // URL to CV
  highlights?: string[]; // key career achievements
  testimonials?: Testimonial[]; // quotes from colleagues/clients
  techSummary?: string[]; // quick tech stack overview
  speakingEvents?: SpeakingEvent[]; // conferences/talks
  openSource?: OpenSourceContribution[]; // notable contributions
}

// -------------------------
// Contact
// -------------------------
export interface ContactMethod {
  label: string; // e.g., "Email", "Phone", "Website"
  url: string; // e.g., mailto:, tel:, https://
}

// -------------------------
// Work Experience
// -------------------------
export interface Project {
  name: string;
  link?: string; // optional project URL
}

export interface WorkExperience {
  companyName: string;
  position: string;
  workPeriod: {
    start: string; // YYYY-MM format
    end?: string; // or "Present"
  };
  location?: string;
  responsibilities: string[];
  projectsWorkedOn: Project[]; // updated to array of Project objects
  skillsGained: string[];
  techStack: string[];
  personalImage?: string[]; // showcase relevant images/screenshots from this job
}

// -------------------------
// Education
// -------------------------
export interface Education {
  degreeName: string;
  institutionName: string;
  grade?: string;
  institutionLink?: string;
  image: string; // institution logos
  personalImage: string[]; // relevant project or activity photos
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
  image?: string[]; // certificate scans
  personalImage?: string[]; // photos relevant to the course or achievement
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
  level: number; // percentage or 0-100 scale
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
  personalImage?: string[]; // showcase event pictures
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
  personalImage?: string[]; // relevant screenshots or book/article covers
}

export interface Volunteering {
  organization: string;
  role: string;
  start: string;
  end?: string;
  description?: string;
  personalImage?: string[]; // photos from volunteering events
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  personalImage?: string[]; // award ceremony or certificate photos
}

// -------------------------
// Testimonials
// -------------------------
export interface Testimonial {
  name: string;
  relation: string; // "Former Manager", "Colleague"
  quote: string;
  personalImage?: string[];
}

// -------------------------
// Speaking Events
// -------------------------
export interface SpeakingEvent {
  title: string; // talk/workshop title
  event: string; // conference or event name
  date: string; // YYYY-MM
  link?: string;
  personalImage?: string[];
}

// -------------------------
// Open Source Contributions
// -------------------------
export interface OpenSourceContribution {
  projectName: string;
  description: string;
  link: string;
  personalImage?: string[];
}

// -------------------------
// New Interface for Spoken Languages with Proficiency Levels
// -------------------------
export interface SpokenLanguageSkill {
  name: string; // Language name, e.g. "English", "Bangla"
  read: number; // 0-100 proficiency percentage
  write: number; // 0-100 proficiency percentage
  speak: number; // 0-100 proficiency percentage
  understand: number; // 0-100 proficiency percentage
}
