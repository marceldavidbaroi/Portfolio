import type { AboutMe } from '../../types/AboutMe';

const aboutMe: AboutMe = {
  name: "Marcel David Baroi",
  currentPosition: "Junior Software Engineer at Proficient Information Systems",
  brief:
    "Aspiring Software Engineer with hands-on experience in full-stack development and a strong foundation in modern web technologies.",
  location: "Dhaka, Bangladesh",

  contact: [
    { label: "Email", url: "mailto:marceldavidbaroi@gmail.com" },
    { label: "Phone", url: "tel:+8801795774216" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/" }
  ],

  workExperience: [
    {
      companyName: "Proficient Information Systems",
      position: "Junior Software Engineer",
      workPeriod: {
        start: "2024-11",
        end: "Present"
      },
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Develop enterprise-level web applications (Frontend)",
        "Maintain and update existing codebases",
        "Collaborate with cross-functional teams to deliver SaaS solutions"
      ],
      projectsWorkedOn: [
        "Brac Social Platform",
        "Supercards",
        "Penny Perfect (Finance App)"
      ],
      skillsGained: [
        "Frontend Development with Vue",
        "Agile methodologies",
        "Code debug and testing"
      ],
      techStack: [
        "Vue",
        "TypeScript",
        "Quasar",
      ],
      personalImage: [] // Add relevant screenshots or work images if any
    }
  ],

  education: [
    {
      degreeName: "Bachelor of Computer Science and Engineering",
      institutionName: "Daffodil International University",
      grade: "3.91/4.00 GPA",
      institutionLink: "https://www.daffodilvarsity.edu.bd/",
      image: [], // university logos or certificates
      personalImage: [], // project presentations or relevant images
      year: {
        start: "2020",
        end: "2024"
      }
    },
    {
      degreeName: "Higher Secondary Certificate",
      institutionName: "Notre Dame College",
      grade: '4.67',
      institutionLink: "https://www.notredamecollege.edu.bd/",
      image: [],
      personalImage: [],
      year: {
        start: "2017",
        end: "2019"
      }
    }
  ],

  profiles: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/"
    },
    {
      platform: "GitHub",
      url: "https://github.com/marceldavid"
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/marceldavid/"
    }
  ],

  certificates: [
    {
      courseName: "Full Stack Web Development",
      certificateLink: "https://example.com/certificate/fullstack",
      skillsGained: ["React", "Node.js", "MongoDB"],
      issuedBy: "Coursera",
      year: "2023",
      image: [],
      personalImage: []
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript", read: true, write: true, speak: true, understand: true },
      { name: "TypeScript", read: true, write: true, speak: true, understand: true },
      { name: "Python", read: true, write: true, speak: false, understand: true }
    ],
    softSkills: [
      { name: "Teamwork", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Problem Solving", level: 90 }
    ],
    hardSkills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Docker", level: 70 }
    ]
  },

  interpersonalSkills: [
    { name: "Empathy", description: "Ability to understand and share the feelings of others" },
    { name: "Active Listening", description: "Fully concentrating, understanding, responding" }
  ],

  extracurriculars: [
    {
      title: "Volunteer Teacher",
      description: "Teaching basic programming skills to underprivileged children.",
      year: "2022",
      relatedLinks: [],
      personalImage: []
    }
  ],

  hobbies: ["Reading Tech Blogs", "Programming Challenges", "Gaming"],
  interests: ["Open Source", "AI & Machine Learning", "Cloud Computing"],

  publications: [
    {
      title: "Building Scalable React Applications",
      publisher: "Medium",
      date: "2023-05",
      link: "https://medium.com/@marceldavid/building-scalable-react-applications-abc123",
      summary: "An article sharing best practices for scaling React projects.",
      personalImage: []
    }
  ],

  volunteering: [
    {
      organization: "Tech For Good",
      role: "Event Organizer",
      start: "2021-09",
      end: "2022-12",
      description: "Organized community tech workshops and hackathons.",
      personalImage: []
    }
  ],

  awards: [
    {
      title: "Best Intern Award",
      issuer: "Proficient Information Systems",
      year: "2024",
      description: "Recognized for outstanding contribution during internship.",
      personalImage: []
    }
  ],

  // Additional helpful fields
  spokenLanguages: [
    { name: "English", read: 95, write: 90, speak: 85, understand: 95 },
    { name: "Bangla", read: 100, write: 100, speak: 100, understand: 100 }
  ],
  availability: "Open to Work",
  resumeLink: "https://marceldavid.dev/resume.pdf",
  highlights: [
    "5+ years of programming experience",
    "Contributed to multiple open source projects",
    "Strong foundation in modern web technologies"
  ],
  testimonials: [
    {
      name: "John Doe",
      relation: "Former Manager",
      quote:
        "Marcel is a dedicated engineer with excellent problem-solving skills and a team player attitude.",
      personalImage: []
    }
  ],
  techSummary: ["React", "Node.js", "TypeScript", "Docker", "AWS"],
  speakingEvents: [
    {
      title: "React Best Practices",
      event: "Local Dev Conference",
      date: "2023-08",
      link: "https://localdevconf.com/talks/react-best-practices",
      personalImage: []
    }
  ],
  openSource: [
    {
      projectName: "Awesome React Components",
      description: "Contributed to reusable UI components library.",
      link: "https://github.com/awesome/react-components",
      personalImage: []
    }
  ]
};

export default aboutMe;
