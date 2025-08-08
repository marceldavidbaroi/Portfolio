import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

const RoleIcon = () => <FontAwesomeIcon icon={faUserFriends} />;

interface InterpersonalSkillsSectionProps {
  aboutMe: AboutMe;
}

const InterpersonalSkillsSection: React.FC<InterpersonalSkillsSectionProps> = ({
  aboutMe,
}) => {
  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-3"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6  border-[var(--color-text-dark)] pb-2">
        <RoleIcon />
        Interpersonal Skills
      </h2>

      <ul className="text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)] space-y-4">
        {aboutMe.interpersonalSkills.map(({ name, description }) => (
          <li
            key={name}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-4"
          >
            <strong className="text-[var(--color-accent-1)]">{name}</strong>
            {description && <p className="italic mt-1">{description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InterpersonalSkillsSection;
