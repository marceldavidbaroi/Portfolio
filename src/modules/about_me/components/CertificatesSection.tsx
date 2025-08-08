import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import type { AboutMe } from "../../../types/AboutMe"; // adjust path as needed

const RoleIcon = () => <FontAwesomeIcon icon={faCertificate} />;

interface CertificatesSectionProps {
  aboutMe: AboutMe;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  aboutMe,
}) => {
  return (
    <section
      className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 mt-8"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2 mb-4">
        <RoleIcon />
        Certificates
      </h2>

      {/* Scrollable container */}
      <div className=" scrollbar-hide overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--color-accent-2)]  scrollbar-track-transparent pb-2">
        <div className="flex gap-4 min-w-max">
          {aboutMe.certificates.map(
            ({ courseName, certificateLink, skillsGained, issuedBy, year }) => (
              <div
                key={courseName}
                className="w-72 flex-shrink-0 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300 border-b-2"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-soft)] font-semibold text-lg hover:underline line-clamp-2"
                >
                  {courseName}
                </a>
                <p className="mt-1 italic text-sm text-[var(--color-text-soft)]">
                  Issued by {issuedBy} — {year}
                </p>

                <p className="mt-3 font-semibold text-[var(--color-text-dark)] mb-2">
                  Skills Gained:
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillsGained.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded"
                      style={{
                        backgroundColor: "var(--color-text-soft)",
                        color: "var(--color-bg)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
