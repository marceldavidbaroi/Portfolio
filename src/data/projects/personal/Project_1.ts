import type { PersonalProject } from "../../../types/PersonalProjectDetails";

const project: PersonalProject = {
  id: "p-001",
  title: "WildPlan",
  type: "personal",
  shortDescription: "A Quasar and Firebase-powered travel planning application.",
  longDescription:
    "WildPlan is a fully responsive travel planning application built using Quasar (Vue.js framework) on the frontend and Firebase for backend services including authentication and Firestore for data storage. The app allows users to create and manage trips, build day-wise itineraries, manage packing lists, assign and track tasks through a Kanban-style task board, and collaborate with other users through role-based access control. Each release includes detailed release notes for transparency. Currently working on integrating an AI-powered chat assistant (using Ollama) for trip suggestions and packing recommendations. The backend also includes a FastAPI layer with PostgreSQL for future extensibility.",
  stack: ["Quasar", "Vue", "Firebase", "FastAPI", "PostgreSQL", "Ollama"],
  problemSolved: "Helps individuals and teams efficiently plan, manage, and execute travel plans in a structured and collaborative way.",
  reasonToBuild:
    "To gain hands-on experience with Quasar, Firebase (Auth and Firestore), FastAPI, PostgreSQL, and to explore integrating AI assistants into real-world applications.",
  features: [
    {
      name: "Trip Management",
      description:
        "Create trips with detailed information, invite members, and manage them using a role-based permission system for secure collaboration.",
      images: []
    },
    {
      name: "Itinerary Builder",
      description:
        "Design day-by-day travel plans using a scheduler or manual inputs. Modify, print individual days, or export the entire itinerary in printable format.",
      images: []
    },
    {
      name: "Packing List",
      description:
        "Add, manage, and check off essential packing items. Lists are customizable and can be shared with trip members.",
      images: []
    },
    {
      name: "Task Board",
      description:
        "A Kanban-style task board to create, assign, and monitor tasks. Supports state changes, deletion, and filtering for better task management.",
      images: []
    }
  ],
  skillsGained: [
    "Project architecture and planning",
    "Firebase Authentication and Firestore",
    "Quasar Framework and Vue composition API",
    "State management in Vue",
    "Role-based permission systems",
    "AI integration with Ollama"
  ],
  lacking:
    "Live chat feature, budget tracking module, offline support, and fully functional AI assistant.",
  futurePlan:
    "Add real-time chat, budget planning tools, offline availability, and complete the AI chat assistant integration.",
  github: "https://github.com/marceldavidbaroi/WildPlan",
  liveLinks: [],
  images: [],
  associatedWithCompany: false,
  companyName: null,
  challengesFaced: [
    "Architecting the project for scalability",
    "Managing and syncing multiple application states across modules",
    "Balancing UI complexity with UX simplicity",
    "Designing a flexible but secure permission system"
  ],
  lessonsLearned: [
    "The importance of detailed project planning",
    "MVP-first approach leads to better iteration cycles",
    "Component-based development speeds up complex UIs",
    "Balancing backend responsibilities across Firebase and custom APIs"
  ],
  year: "2025",
  role: "Full Stack Developer",
  createdAt: null,
  updatedAt: null
};

export default project;
