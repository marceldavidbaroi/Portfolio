import React from "react";
import type { CompanyProject } from "../../../types/CompanyProject";

// === IconWrapper + All Icons ===
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    className="w-6 h-6 mr-2 flex-shrink-0"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ color: "var(--color-text-soft)" }}
  >
    {children}
  </svg>
);

const LinkIcon = () => (
  <IconWrapper>
    <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
    <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
  </IconWrapper>
);

const TechStackIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2v20" />
  </IconWrapper>
);

const FeaturesIcon = () => (
  <IconWrapper>
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </IconWrapper>
);

const RoleIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0113 0" />
  </IconWrapper>
);

const LessonsIcon = () => (
  <IconWrapper>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </IconWrapper>
);

const ChallengesIcon = () => (
  <IconWrapper>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </IconWrapper>
);

const FuturePlanIcon = () => (
  <IconWrapper>
    <path d="M12 2v20" />
    <path d="M2 12h20" />
  </IconWrapper>
);

const SkillsIcon = () => (
  <IconWrapper>
    <path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7z" />
  </IconWrapper>
);

const LackingIcon = () => (
  <IconWrapper>
    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    <circle cx="12" cy="12" r="9" />
  </IconWrapper>
);

const CompanyIcon = () => (
  <IconWrapper>
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
    <path d="M16 3h-4a2 2 0 00-2 2v2h8V5a2 2 0 00-2-2z" />
  </IconWrapper>
);

// === Main Component ===
const CompanyProjectDetails: React.FC<{ project: CompanyProject }> = ({ project }) => {
  return (
    <div
      className="h-screen overflow-y-auto scrollbar-hide px-6 py-12 font-terminal"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-dark)" }}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Links */}
        <section className="flex flex-wrap items-center gap-6 mb-10 text-[var(--color-text-soft)] font-semibold">
          <LinkIcon />
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[var(--color-accent-2)] dark:hover:text-[var(--color-accent-1)] transition-colors"
            >
              GitHub Repo
            </a>
          )}
          {project.liveLinks?.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[var(--color-accent-2)] dark:hover:text-[var(--color-accent-1)] transition-colors"
            >
              Live Site {idx + 1}
            </a>
          ))}
        </section>

        {/* Title */}
        <div className="border-b border-[var(--color-text-soft)] pb-4">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="mt-2 text-lg font-medium text-[var(--color-text-soft)]">
            {project.shortDescription}
          </p>
        </div>

        {/* Images */}
        {project.images?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg overflow-hidden shadow-lg">
            {project.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="object-cover w-full h-64 transform transition-transform hover:scale-105"
              />
            ))}
          </div>
        )}

        {/* Long Description */}
        <section className="border-b border-[var(--color-text-soft)] pb-6">
          <h2 className="text-3xl font-semibold mb-4 flex items-center">
            <FeaturesIcon />
            Project Overview
          </h2>
          <p className="text-[var(--color-text-soft)]">{project.longDescription}</p>
        </section>

        {/* Stack + Role + Responsibilities */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <TechStackIcon />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)] font-semibold hover:bg-[var(--color-accent-1)] dark:hover:bg-[var(--color-accent-2)] cursor-default transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <RoleIcon />
              Role & Responsibilities
            </h3>
            <p className="text-[var(--color-text-soft)] mb-2">{project.role}</p>
            <ul className="list-disc list-inside text-[var(--color-text-soft)] space-y-2">
              {project.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contributions */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 flex items-center border-b border-[var(--color-text-soft)] pb-2">
            <FeaturesIcon />
            Detailed Contributions
          </h3>
          <ul className="space-y-6">
            {project.contributions.map((contrib, idx) => (
              <li
                key={idx}
                className="p-6 rounded-lg bg-[var(--color-bg)] shadow-md hover:shadow-xl transition-shadow cursor-default"
              >
                <h4 className="font-semibold text-xl mb-1">{contrib.responsibility}</h4>
                <p className="text-[var(--color-text-soft)]">{contrib.description}</p>
                {contrib.technologiesUsed?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {contrib.technologiesUsed.map((tech, idx2) => (
                      <span
                        key={idx2}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[var(--color-text-soft)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills + Lacking */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <SkillsIcon />
              Skills Gained
            </h3>
            <ul className="list-disc list-inside text-[var(--color-text-soft)] space-y-2">
              {project.skillsGained.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <LackingIcon />
              Lacking
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.lacking}</p>
          </div>
        </section>

        {/* Lessons, Challenges, Future, Company */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <LessonsIcon />
              Lessons Learned
            </h3>
            <ul className="list-disc list-inside text-[var(--color-text-soft)] space-y-2">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx}>{lesson}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <ChallengesIcon />
              Challenges Faced
            </h3>
            <ul className="list-disc list-inside text-[var(--color-text-soft)] space-y-2">
              {project.challengesFaced.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <FuturePlanIcon />
              Future Plan
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.futurePlan || "N/A"}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <CompanyIcon />
              Company Info
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.companyName}</p>
            <p className="text-sm text-[var(--color-text-soft)] italic mt-1">Team Size: {project.teamSize}</p>
            <p className="text-sm text-[var(--color-text-soft)] italic">Year: {project.year}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyProjectDetails;
