import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Contact {
  label: string;
  url: string;
}

interface Profile {
  platform: string;
  url: string;
}

interface AboutMe {
  name: string;
  currentPosition: string;
  brief: string;
  location?: string;
  contact?: Contact[];
  profiles?: Profile[];
  profileImage: string;
}

interface AboutMeSectionProps {
  aboutMe: AboutMe;
  iconMap: { [key: string]: IconDefinition }; // FontAwesome icon map keyed by platform
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  aboutMe,
  iconMap,
}) => {
  return (
    <section
      className="rounded-xl p-6 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Column - Text Details */}
        <div className="flex-1 space-y-4 text-[var(--color-text-dark)] font-semibold">
          <h1 className="text-4xl font-extrabold">{aboutMe.name}</h1>
          <p className="text-xl text-[var(--color-text-dark)]">
            {aboutMe.currentPosition}
          </p>
          <p className="text-base font-normal leading-relaxed">
            {aboutMe.brief}
          </p>

          {aboutMe.location && (
            <p className="italic text-[var(--color-text-soft)]">
              {aboutMe.location}
            </p>
          )}

          {/* Contact List */}
          <ul className="flex flex-wrap gap-6 text-[var(--color-text-soft)] font-semibold">
            {aboutMe.contact?.map(({ label, url }) => (
              <li key={label} className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={
                    label.toLowerCase().includes("email")
                      ? faEnvelope
                      : label.toLowerCase().includes("phone")
                      ? faPhone
                      : faLink
                  }
                />
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent-1)] hover:underline transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Profiles Buttons */}
          <div className="mt-4 flex flex-wrap gap-4">
            {aboutMe.profiles?.map(({ platform, url }) => {
              const iconKey = platform.toLowerCase();

              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--color-text-soft)] rounded-md px-4 py-2 text-[var(--color-text-soft)] font-semibold hover:bg-[var(--color-text-soft)] hover:text-white transition"
                >
                  <FontAwesomeIcon icon={iconMap[iconKey]} />
                  {platform}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <img
            src={aboutMe.profileImage}
            alt={`${aboutMe.name} profile`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
