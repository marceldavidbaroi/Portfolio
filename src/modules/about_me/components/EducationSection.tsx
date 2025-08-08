import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

interface EducationSectionProps {
  aboutMe: AboutMe;
}

const EducationSection: React.FC<EducationSectionProps> = ({ aboutMe }) => {
  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2">
        <FontAwesomeIcon icon={faGraduationCap} />
        Education
      </h2>

      <ul className="space-y-6">
        {aboutMe.education.map((edu, i) => (
          <li key={i} className="flex items-center gap-5">
            {/* Institution Logo */}
            {edu.image && (
              <img
                src={edu.image}
                alt={`${edu.institutionName} logo`}
                className="w-16 h-16 object-contain rounded-md shadow-sm"
              />
            )}

            {/* Details */}
            <div>
              <p className="text-2xl font-extrabold text-[var(--color-text-dark)]">
                {edu.degreeName}
              </p>

              {edu.institutionLink ? (
                <a
                  href={edu.institutionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-[var(--color-text-soft)] hover:underline"
                >
                  {edu.institutionName}
                </a>
              ) : (
                <p className="text-xl font-semibold text-[var(--color-text-soft)]">
                  {edu.institutionName}
                </p>
              )}

              <p className="text-md text-[var(--color-text-soft)] mt-1">
                ({edu.year.start} - {edu.year.end}){" "}
                {edu.grade && (
                  <span className="text-[var(--color-bg)] bg-[var(--color-text-soft)] px-2 py-0.5 rounded ml-1">
                    {edu.grade}
                  </span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;
