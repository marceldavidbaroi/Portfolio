import React, { useState, useEffect } from "react";
import aboutMe from "../../../data/About_me/Me";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    className="w-6 h-6 mr-2 flex-shrink-0"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ color: "var(--color-accent-2)" }}
  >
    {children}
  </svg>
);

const CompanyIcon = () => (
  <IconWrapper>
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
    <path d="M16 3h-4a2 2 0 00-2 2v2h8V5a2 2 0 00-2-2z" />
  </IconWrapper>
);

const SkillsIcon = () => (
  <IconWrapper>
    <path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7z" />
  </IconWrapper>
);

const RoleIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0113 0" />
  </IconWrapper>
);

const LinkIcon = () => (
  <IconWrapper>
    <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
    <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
  </IconWrapper>
);

// Contact Icons
const EmailIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.73 19.73 0 01-8.63-3.13 19.5 19.5 0 01-6-6 19.73 19.73 0 01-3.13-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.7 2 2 0 011.72 2z" />
  </svg>
);

const LinkIconSmall = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
    <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
  </svg>
);

export default function AboutMePage() {
  const [scrolled, setScrolled] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-center items-center transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "opacity-0 scale-95 -translate-y-10 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text-dark)",
          fontFamily: "'VT323', monospace",
        }}
      >
        <h1 className="text-8xl font-extrabold tracking-wide">
          {aboutMe.name}
        </h1>
        <p className="mt-4 text-2xl italic">{aboutMe.currentPosition}</p>
      </div>

      {/* Main content */}
      <main
        className="max-w-5xl mx-auto p-6 pt-[100vh] space-y-12"
        style={{
          color: "var(--color-text-dark)",
          backgroundColor: "var(--color-bg)",
        }}
      >
        {/* Contact Info */}
        <section
          className="rounded-xl p-6 space-y-3 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
            <LinkIcon /> Contact Information
          </h2>
          <ul className="text-[var(--color-text-soft)] font-semibold flex flex-wrap gap-6">
            {aboutMe.contact.map(({ label, url }) => {
              // Choose icon by label (add more if you want)
              let IconComp = null;
              if (label.toLowerCase().includes("email")) IconComp = EmailIcon;
              else if (label.toLowerCase().includes("phone"))
                IconComp = PhoneIcon;
              else IconComp = LinkIconSmall;

              return (
                <li key={label} className="flex items-center">
                  <IconComp />
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent-1)] hover:underline transition"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Work Experience */}
        <section
          className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-1)] p-6 space-y-8"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
            <CompanyIcon /> Work Experience
          </h2>
          {aboutMe.workExperience.map((work, i) => (
            <article
              key={i}
              className="border-b border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[var(--color-accent-2)] mb-1">
                {work.position}
              </h3>
              <p className="italic text-sm text-[var(--color-text-soft)]">
                {work.companyName} — {work.workPeriod.start} to{" "}
                {work.workPeriod.end ?? "Present"} — {work.location}
              </p>
              <div className="mt-3 space-y-2 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)]">
                <p>
                  <strong>Role:</strong> {work.role}
                </p>
                <p>
                  <strong>Projects:</strong>{" "}
                  {work.projectsWorkedOn.join(", ") || "N/A"}
                </p>
                <p>
                  <strong>Tech Stack:</strong> {work.techStack.join(", ")}
                </p>
                <p>
                  <strong>Skills Gained:</strong>
                </p>
                <ul className="list-disc list-inside">
                  {work.skillsGained.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* Education */}
        <section
          className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-3"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
            <RoleIcon /> Education
          </h2>
          <ul className="text-[var(--color-text-soft)]">
            {aboutMe.education.map((edu, i) => (
              <li key={i} className="mb-3">
                <strong>{edu.degreeName}</strong> @{" "}
                <a
                  href={edu.institutionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[var(--color-accent-1)]"
                >
                  {edu.institutionName}
                </a>
                <span>
                  {" "}
                  ({edu.year.start} - {edu.year.end})
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Summary */}
        <section
          className="rounded-xl    transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
            <SkillsIcon /> Skills Summary
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-6 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)]">
            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <ul className="list-disc list-inside space-y-1">
                {aboutMe.skills.languages.map(
                  ({ name, read, write, speak, understand }) => (
                    <li key={name}>
                      <strong>{name}:</strong>{" "}
                      {[
                        read && "Read",
                        write && "Write",
                        speak && "Speak",
                        understand && "Understand",
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </li>
                  )
                )}
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

        {/* Interpersonal Skills */}
        <section
          className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-3"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
            <RoleIcon /> Interpersonal Skills
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

        {/* Hobbies and Interests */}
        <section className="grid md:grid-cols-2 gap-10">
          <div
            className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-1)] p-6"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
              <SkillsIcon /> Hobbies
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

          <div
            className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2">
              <SkillsIcon /> Interests
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
      </main>

      {/* Modal for image preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-500 transition-colors"
            onClick={() => setModalImage(null)}
            aria-label="Close image preview"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
