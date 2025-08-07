import React, { useState, useEffect } from "react";


import type { PersonalProject } from "../../../types/PersonalProjectDetails";

// IconWrapper and individual icons
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

const ProblemSolvedIcon = () => (
  <IconWrapper>
    <path d="M13 16h-1v-4h-1" />
    <path d="M12 10h.01" />
    <circle cx="12" cy="12" r="9" />
  </IconWrapper>
);

const ReasonToBuildIcon = () => (
  <IconWrapper>
    <path d="M12 20h9" />
    <path d="M12 4h9" />
    <path d="M4 12h16" />
    <path d="M4 4v16" />
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




const PersonalProjectDetails: React.FC<{ project: PersonalProject }> = ({ project }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // adjust scroll trigger here
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* Top Banner: fullscreen, fixed, fades out + slides up on scroll */}
<div
  className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-end items-center transition-all duration-700 ease-in-out overflow-y-auto
    ${
      scrolled
        ? "opacity-0 scale-95 -translate-y-10 pointer-events-none"
        : "opacity-100 scale-100"
    }
  `}
  style={{
    backgroundColor: "var(--color-bg)",
    color: "var(--color-text-dark)",
  }}
>
<h1 className="text-5xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-9xl font-extrabold tracking-wide mb-40 text-center">
  {project.title}
</h1>
</div>


      {/* Main content with top padding equal to viewport height */}
      <div
        className="max-w-5xl mx-auto px-6 pb-16 pt-[100vh] space-y-12"
        style={{ color: "var(--color-text-dark)", backgroundColor: "var(--color-bg)" }}
      >
        {/* Links at top */}
        <section className="flex flex-wrap items-center gap-6 text-[var(--color-text-soft)] font-semibold">
          <LinkIcon />
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--color-accent-2)] dark:hover:text-[var(--color-accent-1)] transition-colors"
          >
            GitHub Repo
          </a>
          {project.liveLinks.map((link, idx) => (
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

        {/* Title and short description */}
        <div className="border-b border-[var(--color-text-soft)] pb-4">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p
            className="mt-2 text-lg font-medium"
            style={{ color: "var(--color-text-soft)" }}
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Images */}
        {project.images.length > 0 && (
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 py-2">
              {project.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="object-cover w-64 h-40 flex-shrink-0 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => setModalImage(src)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Project Overview */}
        <section className="border-b border-[var(--color-text-soft)] pb-6 space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <FeaturesIcon />
              Project Overview
            </h2>
            <p className="leading-relaxed text-[var(--color-text-soft)]">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <ProblemSolvedIcon />
              Problem Solved
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.problemSolved}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <ReasonToBuildIcon />
              Reason to Build
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.reasonToBuild}</p>
          </div>
        </section>

        {/* Stack and Role */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <TechStackIcon />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-[var(--color-text-dark)] dark:text-[var(--color-accent-1)] font-semibold hover:bg-[var(--color-accent-1)] dark:hover:bg-[var(--color-accent-2)] cursor-default transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <RoleIcon />
              My Role
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.role}</p>
          </div>
        </section>

        {/* Skills Gained and Lacking */}
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

        {/* Features */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 flex items-center pb-2">
            <FeaturesIcon />
            Key Features
          </h3>
          <ul className="space-y-6">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="p-6 rounded-xl bg-[var(--color-bg)] shadow-md hover:shadow-xl transition-all cursor-default border border-transparent"
              >
                <div className="flex flex-col md:flex-row items-start gap-4">
                  {/* Feature Image (if available) */}
                  {feature.images && feature.images.length > 0 && (
                    <img
                      src={feature.images[0]}
                      alt={feature.name}
                      className="w-full md:w-48 h-32 object-cover rounded-md border border-gray-300 shadow-sm cursor-pointer"
                      onClick={() => setModalImage(feature.images[0])}
                    />
                  )}

                  {/* Feature Text */}
                  <div>
                    <h4 className="font-semibold text-xl mb-1">{feature.name}</h4>
                    <p className="text-[var(--color-text-soft)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons, Challenges, Future Plan, Company */}
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
            <p className="text-[var(--color-text-soft)]">{project.futurePlan}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center border-b border-[var(--color-text-soft)] pb-2">
              <CompanyIcon />
              Company
            </h3>
            {project.associatedWithCompany ? (
              <p className="text-[var(--color-text-soft)]">
                {project.companyName ?? "Company Name Not Provided"}
              </p>
            ) : (
              <p className="text-[var(--color-text-soft)] italic">
                Not associated with a company
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Modal Dialog */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 animate-fadeIn"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-500 transition-colors"
            onClick={() => setModalImage(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>
    </>
  );
};

export default PersonalProjectDetails;
