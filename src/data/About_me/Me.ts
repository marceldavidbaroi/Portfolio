import type { AboutMe } from "../../types/AboutMe";
const DIU = "/images/DIU.png";
const NDC = "/images/NDC.png";
const PROFILE = "/images/profile.png";

const aboutMe: AboutMe = {
  name: "Marcel David Baroi",
  currentPosition: "Junior Software Engineer ",
  brief:
    "Aspiring Software Engineer with hands-on experience in full-stack development and a strong foundation in modern web technologies.",
  location: "Dhaka, Bangladesh",
  profileImage: PROFILE,

  contact: [
    { label: "Email", url: "mailto:marceldavidbaroi@gmail.com" },
    { label: "Phone", url: "tel:+8801795774216" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/",
    },
  ],

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
        "Develop enterprise-level web applications (Frontend)",
        "Maintain and update existing codebases",
        "Collaborate with cross-functional teams to deliver SaaS solutions",
      ],
      projectsWorkedOn: [
        {
          name: "Brac Social Platform",
          link: "https://social-stg.brac.net/market",
        },
        { name: "Supercards", link: "https://www.supercards.ca/" },
        { name: "Penny Perfect (Finance App)" },
      ],
      skillsGained: [
        "Frontend Development with Vue",
        "Agile methodologies",
        "Code debug and testing",
      ],
      techStack: ["Vue", "TypeScript", "Quasar"],
      personalImage: [], // Add relevant screenshots or work images if any
    },
  ],

  education: [
    {
      degreeName: "Bachelor of Computer Science and Engineering",
      institutionName: "Daffodil International University",
      grade: "3.91 / 4.00 GPA",
      institutionLink: "https://www.daffodilvarsity.edu.bd/",
      image: DIU, // university logos or certificates
      personalImage: [], // project presentations or relevant images
      year: {
        start: "2020",
        end: "2024",
      },
    },
    {
      degreeName: "Higher Secondary Certificate",
      institutionName: "Notre Dame College",
      grade: "4.67 / 5.00 GPA",
      institutionLink: "https://www.ndc.edu.bd/",
      image: NDC,
      personalImage: [],
      year: {
        start: "2017",
        end: "2019",
      },
    },
  ],

  profiles: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/",
    },
    {
      platform: "GitHub",
      url: "https://github.com/marceldavid",
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/marceldavidbaroi/",
    },
    {
      platform: "HackerRank",
      url: "https://www.hackerrank.com/profile/marcel15_3421",
    },
    {
      platform: "Beecrowd",
      url: "https://judge.beecrowd.com/en/profile/458510",
    },
  ],

  certificates: [
    {
      courseName: "Introduction to Large Language Models",
      certificateLink: "",
      skillsGained: ["Generative AI"],
      issuedBy: "Google",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Introduction to Generative AI",
      certificateLink: "",
      skillsGained: ["Generative AI"],
      issuedBy: "Google",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations",
      certificateLink: "",
      skillsGained: ["Project Management"],
      issuedBy: "LinkedIn",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations: Budgets",
      certificateLink: "",
      skillsGained: ["Budget Development", "Project Management"],
      issuedBy: "LinkedIn",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations: Requirements",
      certificateLink: "",
      skillsGained: ["Requirements Management", "Project Management"],
      issuedBy: "LinkedIn",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations: Schedules",
      certificateLink: "",
      skillsGained: ["Project Scheduling"],
      issuedBy: "LinkedIn",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations: Teams",
      certificateLink: "",
      skillsGained: ["Project Team Management"],
      issuedBy: "LinkedIn",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Python Essentials 2",
      certificateLink: "",
      skillsGained: ["Python (Programming Language)"],
      issuedBy: "Cisco",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Canva Essentials",
      certificateLink: "",
      skillsGained: ["Canva"],
      issuedBy: "Canva",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Python Essentials 1",
      certificateLink: "",
      skillsGained: ["Python (Programming Language)"],
      issuedBy: "Cisco",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Responsive Web Design",
      certificateLink: "",
      skillsGained: [],
      issuedBy: "freeCodeCamp",
      year: "2025",
      image: [],
      personalImage: [],
    },
    {
      courseName: "JavaScript Essentials 2",
      certificateLink: "",
      skillsGained: [],
      issuedBy: "Cisco",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Networking Basics",
      certificateLink: "",
      skillsGained: ["Networking"],
      issuedBy: "Cisco",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "JavaScript Essentials 1",
      certificateLink: "",
      skillsGained: [],
      issuedBy: "Cisco",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName:
        "Career Essentials in Generative AI by Microsoft and LinkedIn",
      certificateLink: "",
      skillsGained: [
        "Artificial Intelligence (AI)",
        "Generative AI",
        "Computer Ethics",
      ],
      issuedBy: "Microsoft",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Ethics in the Age of Generative AI",
      certificateLink: "",
      skillsGained: ["Computer Ethics"],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Generative AI: The Evolution of Thoughtful Online Search",
      certificateLink: "",
      skillsGained: ["Search Engine Technology"],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Introduction to Artificial Intelligence",
      certificateLink: "",
      skillsGained: [
        "Artificial Intelligence (AI)",
        "Artificial Intelligence for Business",
      ],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Learning Microsoft 365 Copilot",
      certificateLink: "",
      skillsGained: ["Microsoft 365"],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Streamlining Your Work with Microsoft Copilot",
      certificateLink: "",
      skillsGained: ["Productivity Improvement"],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "What Is Generative AI?",
      certificateLink: "",
      skillsGained: [
        "Artificial Intelligence (AI)",
        "Generative AI",
        "Artificial Intelligence for Business",
      ],
      issuedBy: "LinkedIn",
      year: "2024",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Color for Design and Art",
      certificateLink: "",
      skillsGained: ["Design Theory", "Color Theory"],
      issuedBy: "LinkedIn",
      year: "2022",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Graphic Design Foundations: Layout and Composition",
      certificateLink: "",
      skillsGained: ["Graphic Design", "Layout Design"],
      issuedBy: "LinkedIn",
      year: "2022",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Graphic Design Foundations: Typography",
      certificateLink: "",
      skillsGained: ["Typography"],
      issuedBy: "LinkedIn",
      year: "2022",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Introduction to Graphic Design: Concepts",
      certificateLink: "",
      skillsGained: ["Graphic Design"],
      issuedBy: "LinkedIn",
      year: "2022",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Graphic Design Careers: First Steps",
      certificateLink: "",
      skillsGained: ["Graphic Design"],
      issuedBy: "LinkedIn",
      year: "2022",
      image: [],
      personalImage: [],
    },
    {
      courseName: "JavaScript (Basic)",
      certificateLink: "",
      skillsGained: ["JavaScript"],
      issuedBy: "HackerRank",
      year: "",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Project Management Foundations: Ethics",
      certificateLink: "",
      skillsGained: ["Project Management"],
      issuedBy: "LinkedIn",
      year: "",
      image: [],
      personalImage: [],
    },
    {
      courseName: "Python (Basic)",
      certificateLink: "",
      skillsGained: ["Python (Programming Language)"],
      issuedBy: "HackerRank",
      year: "",
      image: [],
      personalImage: [],
    },
    {
      courseName: "React (Basic)",
      certificateLink: "",
      skillsGained: ["React.js"],
      issuedBy: "HackerRank",
      year: "",
      image: [],
      personalImage: [],
    },
  ],

  skills: {
    languages: [
      {
        name: "JavaScript",
        level: 70,
      },
      {
        name: "Python",
        level: 60,
      },
      {
        name: "C",
        level: 60,
      },
    ],
    softSkills: [
      { name: "Teamwork", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 80 },
    ],
    hardSkills: [
      {
        name: "Vue.js",
        level: 85,
      },
      {
        name: "Quasar Framework",
        level: 85,
      },
      {
        name: "HTML",
        level: 70,
      },
      {
        name: "CSS",
        level: 65,
      },
      {
        name: "Bootstrap",
        level: 50,
      },
      {
        name: "Tailwind CSS",
        level: 60,
      },
      {
        name: "Node.js",
        level: 45,
      },
      {
        name: "MySQL",
        level: 55,
      },
      {
        name: "REST APIs",
        level: 60,
      },
      {
        name: "Firebase (Auth, Firestore)",
        level: 60,
      },
      {
        name: "Postman",
        level: 45,
      },
    ],
  },

  interpersonalSkills: [
    {
      name: "Empathy",
      description: "Ability to understand and share the feelings of others",
    },
    {
      name: "Active Listening",
      description: "Fully concentrating, understanding, responding",
    },
  ],

  extracurriculars: [
    {
      title: "Volunteer for Pope Francis' Visit",
      description:
        "Selected as a volunteer for the youth meeting at Notre Dame College and the main mass at Ramna Race Course in Dhaka. Involved in pre-event training and preparation, and experienced international security protocols.",
      year: "2017",
      relatedLinks: [
        "https://sites.google.com/view/marcel-david/about-myself/college-chapter/pope-francis?authuser=0",
      ],
      personalImage: [],
    },
  ],

  hobbies: [
    "Watching movies",
    "Playing simulation games",
    "Watching series",
    "Problem-solving",
  ],
  interests: ["AI & Machine Learning", "Conceptual theories"],

  publications: [
    {
      title:
        "CNN-Based Bangla Handwritten Character Recognition: Exploring Ekush Dataset for Performance Enhancement",
      publisher: "Daffodil International University (Thesis Report)",
      date: "Dec 2023",
      link: "https://internship.daffodilvarsity.edu.bd/?app=home&cmd=reportsViewPDFskin&project_number=26095",
      summary:
        "Evaluated CNN models for Bangla handwritten character recognition using the Ekush dataset.",
      personalImage: [],
    },
  ],

  volunteering: [],

  awards: [],

  // Additional helpful fields
  spokenLanguages: [
    { name: "English", read: 95, write: 90, speak: 85, understand: 95 },
    { name: "Bangla", read: 100, write: 100, speak: 100, understand: 100 },
  ],
  availability: "Open to Work",
  resumeLink: "",
  highlights: [],
  testimonials: [],
  techSummary: ["React", "Node.js", "Vue", "TypeScript"],
  speakingEvents: [],
  openSource: [],
};

export default aboutMe;
