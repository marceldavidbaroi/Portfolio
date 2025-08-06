import React from "react";
import ProjectList from "../components/ProjectList";

const workItems = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind.",
    stack: ["React", "Tailwind", "Vite"],
    company: "Personal",
  },
  {
    id: "2",
    title: "E-commerce App",
    description: "Full-stack shopping experience with Firebase backend.",
    stack: ["Vue", "Firebase", "Quasar"],
    company: "Startup Inc.",
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "Markdown-based minimal blogging system.",
    stack: ["Next.js", "MDX", "Tailwind"],
    company: "Freelance",
  },
  {
    id: "4",
    title: "Admin Dashboard",
    description: "A customizable dashboard with analytics and charts.",
    stack: ["React", "Chart.js", "Tailwind"],
    company: "TechCorp",
  },
  {
    id: "5",
    title: "Weather App",
    description: "Real-time weather forecasts using OpenWeatherMap API.",
    stack: ["Vue", "Axios", "Bootstrap"],
    company: "Personal",
  },
  {
    id: "6",
    title: "Chat Application",
    description: "Realtime chat with Socket.io and Node backend.",
    stack: ["React", "Socket.io", "Express"],
    company: "Freelance",
  },
  {
    id: "7",
    title: "Task Manager",
    description: "To-do app with drag-and-drop and offline support.",
    stack: ["Quasar", "Vue", "PouchDB"],
    company: "Startup Inc.",
  },
  {
    id: "8",
    title: "Movie Explorer",
    description: "Search and explore movies using TMDB API.",
    stack: ["React", "Tailwind", "TMDB"],
    company: "Personal",
  },
  {
    id: "9",
    title: "Fitness Tracker",
    description: "Track workouts and nutrition using Firebase.",
    stack: ["Vue", "Firebase", "Quasar"],
    company: "HealthTech",
  },
  {
    id: "10",
    title: "Landing Page Builder",
    description: "Drag-and-drop tool to build responsive landing pages.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    company: "Freelance",
  },
];


const WorkIndex: React.FC = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row gap-10 px-4 md:p-10"
    >
      {/* Left Column - Info at Bottom */}
      <div className="md:w-1/4 flex flex-col justify-end space-y-4 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
            My Projects
          </h1>
          <p className="text-sm text-[var(--color-text-soft)] mt-2">
            Explore my personal and professional projects, showcasing skills in full-stack development, design, and modern web tools.
          </p>
        </div>
      </div>

      {/* Right Column - Scrollable Project List */}
    <div
  className="md:w-3/4 overflow-y-auto pr-2 md:pr-4"
  style={{
    scrollbarWidth: "none",        // Firefox
    msOverflowStyle: "none",       // IE & Edge
  }}
>
  <div className="scrollbar-hide">
    <ProjectList items={workItems} />
  </div>
</div>
    </div>
  );
};

export default WorkIndex;
