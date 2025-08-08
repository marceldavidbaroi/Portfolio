import React from "react";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

interface AwardsSectionProps {
  aboutMe: AboutMe;
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ aboutMe }) => {
  return (
    <section
      className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold  border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
        Awards
      </h2>
      <ul className="space-y-4 text-[var(--color-text-dark)]">
        {aboutMe.awards.map(({ title, issuer, year, description }, idx) => (
          <li
            key={idx}
            className="p-4 border border-gray-300 rounded-lg hover:shadow-md"
          >
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm italic">
              {issuer} — {year}
            </p>
            <p className="mt-1">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardsSection;
