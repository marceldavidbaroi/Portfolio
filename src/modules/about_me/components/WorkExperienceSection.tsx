import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // example icon
import type { AboutMe } from "../../../types/AboutMe";

interface WorkExperienceSectionProps {
  aboutMe: AboutMe;
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  aboutMe,
}) => {
  const [expandedWorkIndex, setExpandedWorkIndex] = useState<number | null>(
    null
  );

  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-1)] p-6 space-y-8"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2">
        <FontAwesomeIcon icon={faBriefcase} />
        Work Experience
      </h2>

      {aboutMe.workExperience.map((work, i) => {
        const isExpanded = expandedWorkIndex === i;
        const roleText =
          work.position ??
          (work.responsibilities.length > 0 ? work.responsibilities[0] : "N/A");

        return (
          <article
            key={i}
            className="border-b border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm cursor-pointer"
            onClick={() => setExpandedWorkIndex(isExpanded ? null : i)}
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-semibold text-[var(--color-accent-2)]">
                {work.position}
              </h3>
              <button
                aria-expanded={isExpanded}
                aria-label={`${
                  isExpanded ? "Collapse" : "Expand"
                } details for ${work.position}`}
                className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedWorkIndex(isExpanded ? null : i);
                }}
              >
                {isExpanded ? "▲" : "▼"}
              </button>
            </div>

            <p className="italic text-sm text-[var(--color-text-soft)] mb-4">
              {work.companyName} — {work.workPeriod.start} to{" "}
              {work.workPeriod.end ?? "Present"} — {work.location ?? "N/A"}
            </p>

            {!isExpanded && (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)]">
                  <strong>Role:</strong> {roleText}
                </p>

                <div className="flex flex-wrap gap-2 max-w-xs">
                  {work.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[var(--color-bg)] text-sm bg-[var(--color-text-soft)] border border-[var(--color-text-soft)] rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div
              className={`mt-4 space-y-6 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)] transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
                isExpanded
                  ? "max-h-[1000px] opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div className="sm:w-1/2">
                  <h4 className="font-semibold mb-2">Projects</h4>
                  <ul className="list-disc list-inside">
                    {work.projectsWorkedOn.length > 0 ? (
                      work.projectsWorkedOn.map((p, idx) => (
                        <li key={idx}>
                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[var(--color-text-soft)] hover:underline underline"
                            >
                              {p.name}
                            </a>
                          ) : (
                            p.name
                          )}
                        </li>
                      ))
                    ) : (
                      <li>N/A</li>
                    )}
                  </ul>
                </div>

                <div className="sm:w-1/2">
                  <h4 className="font-semibold mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside">
                    {work.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {work.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[var(--color-bg)] text-sm bg-[var(--color-text-soft)] border border-[var(--color-text-soft)] rounded px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Skills Gained</h4>
                <ul className="list-disc list-inside">
                  {work.skillsGained.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default WorkExperienceSection;
