import type { PersonalProject } from "../../../types/PersonalProjectDetails";
const contact = "/images/projects/p-001_windplan/contact.png";
const dashboard = "/images/projects/p-001_windplan/dashboard.png";
const itineraryFull = "/images/projects/p-001_windplan/itinerary_full.png";
const itinerary = "/images/projects/p-001_windplan/itinerary.png";
const lightMode = "/images/projects/p-001_windplan/light_mode.png";
const packing = "/images/projects/p-001_windplan/packing.png";
const scheduler = "/images/projects/p-001_windplan/scheduler.png";
const taskBoard = "/images/projects/p-001_windplan/task_board.png";
const tripDetails = "/images/projects/p-001_windplan/trip_details.png";
const tripSettings = "/images/projects/p-001_windplan/trip_settings.png";
const userSettings = "/images/projects/p-001_windplan/user_settings.png";


const project: PersonalProject = {
  id: "p-001",
  title: "WildPlan",
  type: "personal",
  shortDescription: "A Quasar and Firebase-powered travel planning application.",
  longDescription:
    "WildPlan is a full-featured travel planning application built using Quasar (Vue.js framework) on the frontend, with Firebase providing authentication and Firestore as the real-time NoSQL database. Users can create trips (public or private), build and customize daily itineraries, manage packing lists categorized as personal or shared, assign roles and responsibilities to members, and manage trip tasks via a Kanban-style board. It includes a settings panel for user preferences such as theme switching, default visibility options, and saved contacts. Each trip includes its own settings form where roles, responsibilities, and permissions are defined. There's also a feature to store frequently used contacts (e.g., guides, drivers) with email addresses. Currently in progress: integrating an AI-powered assistant via Ollama to offer smart suggestions for trip planning, packing help, and automated itinerary generation.",
  stack: ["Quasar", "Vue", "Firebase", "FastAPI", "PostgreSQL", "Ollama"],
  problemSolved:
    "Simplifies and centralizes travel planning with collaborative tools, personalization, and structured workflows.",
  reasonToBuild:
    "To explore modern full-stack development with Quasar, Firebase, FastAPI, and PostgreSQL, while solving a real-world problem I personally experienced during trip planning.",
  features: [
    {
      name: "Trip Management",
      description:
        "Create and manage public or private trips. Trips include a settings form to configure roles, responsibilities, and access control for each member.",
      images: [tripDetails]
    },
    {
      name: "Itinerary Builder",
      description:
        "Plan day-by-day travel activities with a drag-and-drop scheduler or manual entry. Each itinerary can be exported or printed individually or as a full trip.",
      images: [itineraryFull]
    },
    {
      name: "Packing List",
      description:
        "Create and manage packing items, categorized as personal or shared/public. Helps ensure everyone knows what to bring and avoid duplicates.",
      images: [packing]
    },
    {
      name: "Task Board",
      description:
        "Visual Kanban-style task manager for assigning and tracking tasks across the team. Includes state transitions (e.g., Todo, In Progress, Done), filtering, and member-specific views.",
      images: [taskBoard]
    },
    {
      name: "Theme Switcher",
      description:
        "Toggle between light and dark mode or customize color palettes. User preferences are stored persistently across sessions.",
      images: [lightMode]
    },
    {
      name: "Settings & Preferences",
      description:
        "Dedicated settings page where users can configure default visibility (e.g., public/private trips), UI preferences, saved contacts, and notification options.",
      images: [userSettings]
    },
    {
      name: "Contact Management",
      description:
        "Store and manage frequently used contacts like guides, drivers, or local hosts. Contact entries include name, email address, and optional notes.",
      images: [contact]
    }
  ],
  skillsGained: [
    "Quasar Framework and Vue 3 Composition API",
    "Firebase Auth and Firestore integration",
    "State management using Vue’s built-in system",
    "FastAPI RESTful services integration",
    "PostgreSQL schema design",
    "Theme customization and local preference storage",
    "User roles and permission logic",
    "Task and data organization via Kanban UX patterns",
    "Dynamic forms and print/export-ready views"
  ],
  lacking:
    "Live chat between users, budget tracking tools, offline access, and complete AI assistant functionality.",
  futurePlan:
    "Integrate real-time chat, add budget planner module, enable offline access for trips, and finish AI assistant integration for smart itinerary generation and packing suggestions.",
  github: "https://github.com/marceldavidbaroi/WildPlan",
  liveLinks: [],
  images: [
  dashboard,
  contact,
  itineraryFull,
  itinerary,
  lightMode,
  packing,
  scheduler,
  taskBoard,
  tripDetails,
  tripSettings,
  userSettings
],

  associatedWithCompany: false,
  companyName: null,
  challengesFaced: [
    "Designing scalable, real-time data structures using Firestore",
    "Managing complex state across multi-user interactions",
    "Creating a responsive, user-friendly UI with deep customization",
    "Handling role-based logic dynamically within trip and task modules"
  ],
  lessonsLearned: [
    "Detailed feature scoping avoids future complexity",
    "Dynamic form generation improves scalability",
    "MVP-first mindset keeps development lean and focused",
    "Theming and personalization improve user retention",
    "Maintaining UX consistency across different modules is critical"
  ],
  year: "2025",
  role: "Full Stack Developer",
  createdAt: null,
  updatedAt: null
};

export default project;
