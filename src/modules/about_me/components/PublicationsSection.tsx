import React from "react";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

interface PublicationsSectionProps {
  aboutMe: AboutMe;
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  aboutMe,
}) => {
  return (
    <section
      className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold  border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
        Publications
      </h2>
      <ul className="space-y-4 text-[var(--color-text-dark)]">
        {aboutMe.publications.map(
          ({ title, publisher, date, link, summary }, idx) => (
            <li
              key={idx}
              className="p-4 border border-gray-300 rounded-lg hover:shadow-md"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg text-[var(--color-accent-1)] hover:underline"
              >
                {title}
              </a>
              <p className="text-sm italic">
                {publisher} — {new Date(date).toLocaleDateString()}
              </p>
              <p className="mt-1">{summary}</p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default PublicationsSection;
