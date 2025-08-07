import type {AboutMe} from '../../types/AboutMe' 

const aboutMe: AboutMe = {
  name: "Marcel David Baroi",
  currentPosition: "Junior Software Engineer at Proficient Information Systems",
  brief: "Aspiring Software Engineer with hands-on experience in full-stack development and a strong foundation in modern web technologies.",
  location: "Dhaka, Bangladesh",

  workExperience: [
    {
      companyName: "Proficient Information Systems",
      position: "Junior Software Engineer",
      workPeriod: {
        start: "2024-11",
        end: "Present",
      },
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Develop enterprise-level web applications",
        "Maintain and update existing codebases",
        "Collaborate with cross-functional teams to deliver SaaS solutions"
      ],
      projectsWorkedOn: [],        // Add specific projects here
      skillsGained: [],            // Add skills gained on the job
      techStack: []                // Add tech stack used at work
    }
  ],

  education: [
    {
      degreeName: "Bachelor of Science (BS)",
      institutionName: "Daffodil International University",
      grade: undefined,
      institutionLink: undefined,
      year: {
        start: "",               // Add start year
        end: ""                  // Add graduation year
      }
    },
    {
      degreeName: "Higher Secondary Certificate",
      institutionName: "Notre Dame College",
      grade: undefined,
      institutionLink: undefined,
      year: {
        start: "",               // Add start year
        end: ""                  // Add graduation year
      }
    }
  ],

  profiles: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/"
    }
    // You can add others (GitHub, LeetCode, etc.) here.
  ],

  certificates: [],             // Add if you have any certifications
  skills: {
    languages: [],              // e.g., JavaScript, TypeScript
    softSkills: [],             // e.g., Teamwork, Communication
    hardSkills: []              // e.g., React, Node.js
  },

  interpersonalSkills: [],      // e.g., "Empathy", "Active listening"
  extracurriculars: [],         // Add any clubs or related activities
  hobbies: [],                  // e.g., "Reading", "Programming"
  interests: [],                // e.g., "Open-source", "AI"

  // Optional enhancements:
  publications: [],
  volunteering: [],
  awards: []
};
export default aboutMe