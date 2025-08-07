import React, { useState } from "react";
import ProjectList from "../components/ProjectList";
import { allProjects } from "../../../data/projects/Index";
import type { PersonalProject } from "../../../types/PersonalProjectDetails";

const projectIds = ["p-001", "p-002", "p-003"]; // Add more IDs as needed

const WorkIndex: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>("all");

  const handleTypeSelect = (type: string | null) => {
    console.log("Selected Type:", type);
    setSelectedType(type);
  };

  // Get all matching projects
  const allSelectedProjects = projectIds
    .map((id) => {
      const project = Object.values(allProjects).find((p) => p.id === id) as PersonalProject | undefined;
      if (!project) return null;

      const { title, type, associatedWithCompany, stack, shortDescription } = project;

      return {
        id,
        title,
        type,
        associatedWithCompany,
        stack,
        shortDescription,
      };
    })
    .filter(Boolean);

  // Filter based on selectedType (if not "all")
  const filteredProjects =
    selectedType === "all"
      ? allSelectedProjects
      : allSelectedProjects.filter((project) => project.type === selectedType);

  return (
    <div className="md:h-screen flex flex-col md:flex-row gap-10 px-4 md:p-10">
      {/* Left Column */}
      <div className="md:w-1/4 flex flex-col justify-end space-y-4 pb-6 pt-12 sm:pt-0">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">
            My Projects
          </h1>

          {/* 👉 Button group */}
          <div className="flex mt-4 gap-2 flex-wrap">
            {["all", "personal", "company", "research"].map((type) => (
              <button
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`px-2  py-1 rounded text-sm border capitalize ${
                  selectedType === type
                    ? "bg-[var(--color-text-dark)] text-white"
                    : "border-[var(--color-text-soft)] text-[var(--color-text-dark)]"
                } hover:bg-[var(--color-text-dark)] hover:text-white transition`}
              >
                {type}
              </button>
            ))}
          </div>

          <p className="text-sm text-[var(--color-text-soft)] mt-2">
            Explore my personal and professional projects, showcasing skills in full-stack development, design, and modern web tools.
          </p>
        </div>
      </div>

      {/* Right Column - Project List */}
      <div
        className="md:w-3/4 overflow-y-auto pr-2 md:pr-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="scrollbar-hide">
          <ProjectList items={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default WorkIndex;
