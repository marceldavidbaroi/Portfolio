import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHeadphones,
  faPenFancy,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

interface SpokenLanguagesSectionProps {
  aboutMe: AboutMe;
}

// Define skillIcons for spoken languages proficiency
const skillIcons = [
  { key: "speaking", label: "Speaking", icon: faComments },
  { key: "listening", label: "Listening", icon: faHeadphones },
  { key: "writing", label: "Writing", icon: faPenFancy },
  { key: "reading", label: "Reading", icon: faBookOpen },
];

const SpokenLanguagesSection: React.FC<SpokenLanguagesSectionProps> = ({
  aboutMe,
}) => {
  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2 mb-6">
        Spoken Languages
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {aboutMe.spokenLanguages.map((lang) => (
          <div
            key={lang.name}
            className="p-4 rounded-lg border border-[var(--color-accent-1)] shadow-sm hover:shadow-md transition"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-text-dark)]">
              {lang.name}
            </h3>

            <div className="grid grid-cols-4 gap-4 text-center">
              {skillIcons.map(({ key, label, icon }) => (
                <div key={key} className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-[var(--color-accent-2)] text-lg mb-1"
                    title={label}
                  />
                  <progress
                    className="w-full h-2 rounded-md overflow-hidden"
                    max={100}
                    value={lang[key]}
                    style={{ accentColor: "var(--color-accent-2)" }}
                  />
                  <span className="text-xs mt-1 text-[var(--color-text-soft)]">
                    {lang[key]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpokenLanguagesSection;
