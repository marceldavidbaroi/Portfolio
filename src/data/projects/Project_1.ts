import type { PersonalProject } from "../../types/PersonalProjectDetails"; 
const project: PersonalProject = {
  id: "p-001",
  title: "TaskFlow",
  type:'personal',
  shortDescription: "A collaborative task management app for teams.",
  longDescription: `TaskFlow is a productivity platform designed to help teams plan, assign, and track work efficiently. It supports kanban boards, team chat, file sharing, and real-time updates. Built to scale for startups and small agencies.`,
  stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  problemSolved: "Lack of simple and collaborative task management tools for small teams.",
  reasonToBuild: "To improve internal productivity and communication within a startup environment.",
  features: [
    {
      name: "Kanban Boards",
      description: "Drag-and-drop task management interface inspired by Trello.",
      images: ["/images/features/kanban.png"]
    },
    {
      name: "Team Chat",
      description: "Built-in real-time messaging for team communication.",
      images: ["/images/features/chat.png"]
    },
    {
      name: "File Attachments",
      description: "Support for uploading documents and images to tasks.",
      images: ["/images/features/files.png"]
    }
  ],
  skillsGained: [
    "Advanced React patterns",
    "REST API development",
    "Authentication with JWT",
    "Real-time communication using Socket.IO"
  ],
  lacking: "Unit testing and mobile responsiveness need improvement.",
  futurePlan: "Add calendar view, mobile app version, and task dependency mapping.",
  github: "https://github.com/username/taskflow",
  liveLinks: ["https://taskflow.live", "https://demo.taskflow.live"],
  images: [
    "/images/projects/taskflow-1.png",
    "/images/projects/taskflow-2.png"
  ],
  associatedWithCompany: true,
  companyName: "StartUp Co.",
  challengesFaced: [
    "Managing real-time updates efficiently",
    "Designing a responsive and accessible UI",
    "Maintaining performance with large task boards"
  ],
  lessonsLearned: [
    "Importance of UI/UX in task-heavy apps",
    "How to structure scalable MongoDB schemas",
    "Effective use of WebSockets in production"
  ],
  role: "Full-stack Developer",
  createdAt: "2025-05-10T14:30:00.000Z",
  updatedAt: "2025-08-01T10:00:00.000Z"
};


export default project;
