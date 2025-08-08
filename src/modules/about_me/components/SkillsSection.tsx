import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStar } from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

// Example SkillsIcon component — replace with your actual icon/component
const SkillsIcon = () => <FontAwesomeIcon icon={faStar} />;

interface SkillsSectionProps {
  aboutMe: AboutMe;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ aboutMe }) => {
  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] pb-2  border-[var(--color-text-dark)]">
        <SkillsIcon />
        Skills Summary
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-6 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)]">
        {/* Programming Languages */}
        <div>
          <h3 className="font-semibold mb-3">Programming Languages</h3>
          <ul className="space-y-4">
            {aboutMe.skills.languages.map(({ name, level }) => (
              <li key={name}>
                <div className="flex justify-between mb-1 font-semibold">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCode} />
                    {name}
                  </span>
                  <span>{level}%</span>
                </div>
                <progress
                  className="w-full h-3 rounded-md overflow-hidden"
                  max={100}
                  value={level}
                  style={{ accentColor: "var(--color-accent-2)" }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="font-semibold mb-3">Soft Skills</h3>
          <ul className="space-y-4">
            {aboutMe.skills.softSkills.map(({ name, level }) => (
              <li key={name}>
                <div className="flex justify-between mb-1 font-semibold">
                  {name}
                  <span>{level}%</span>
                </div>
                <progress
                  className="w-full h-3 rounded-md overflow-hidden"
                  max={100}
                  value={level}
                  style={{ accentColor: "var(--color-accent-2)" }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Hard Skills */}
        <div>
          <h3 className="font-semibold mb-3">Hard Skills</h3>
          <ul className="space-y-4">
            {aboutMe.skills.hardSkills.map(({ name, level }) => (
              <li key={name}>
                <div className="flex justify-between mb-1 font-semibold">
                  {name}
                  <span>{level}%</span>
                </div>
                <progress
                  className="w-full h-3 rounded-md overflow-hidden"
                  max={100}
                  value={level}
                  style={{ accentColor: "var(--color-accent-2)" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
