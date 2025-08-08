import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

const SkillsIcon = () => <FontAwesomeIcon icon={faHeart} />;

interface HobbiesInterestsSectionProps {
  aboutMe: AboutMe;
}

const HobbiesInterestsSection: React.FC<HobbiesInterestsSectionProps> = ({
  aboutMe,
}) => {
  return (
    <section className="grid md:grid-cols-2 gap-10">
      {/* Hobbies */}
      <div
        className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-1)] p-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6  border-[var(--color-text-dark)] pb-2">
          <SkillsIcon />
          Hobbies
        </h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {aboutMe.hobbies.map((hobby, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[var(--color-accent-1)] text-white rounded-full cursor-default select-none"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div
        className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6  border-[var(--color-text-dark)] pb-2">
          <SkillsIcon />
          Interests
        </h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {aboutMe.interests.map((interest, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[var(--color-accent-2)] text-white rounded-full cursor-default select-none"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesInterestsSection;
