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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faLeanpub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEye, // for read
  faPenNib, // for write
  faCommentDots, // for speak
  faBookOpen, // for understand
} from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const skillIcons = [
  { key: "read", label: "Read", icon: faEye },
  { key: "write", label: "Write", icon: faPenNib },
  { key: "speak", label: "Speak", icon: faCommentDots },
  { key: "understand", label: "Understand", icon: faBookOpen },
];

const iconMap = {
  linkedin: faLinkedinIn,
  github: faGithub,
  leetcode: faLeanpub,
};

export default function AboutMePage() {
  const [scrolled, setScrolled] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [expandedWorkIndex, setExpandedWorkIndex] = useState(null);

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
                {aboutMe.contact?.map(({ label, url }) => {
                  let IconComp = null;
                  if (label.toLowerCase().includes("email"))
                    IconComp = EmailIcon;
                  else if (label.toLowerCase().includes("phone"))
                    IconComp = PhoneIcon;
                  else IconComp = LinkIconSmall;

                  return (
                    <li key={label} className="flex items-center gap-2">
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

              {/* Profiles Buttons */}
              <div className="mt-4 flex flex-wrap gap-4">
                {aboutMe.profiles?.map(({ platform, url }) => {
                  // Extract icon key from icon string, e.g., 'fa-brands fa-linkedin-in' => 'linkedin'
                  // For simplicity, lowercase platform name as key
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

        {/* Work Experience */}
        <section
          className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-1)] p-6 space-y-8"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2">
            <CompanyIcon />
            Work Experience
          </h2>

          {aboutMe.workExperience.map((work, i) => {
            const isExpanded = expandedWorkIndex === i;
            // Use role if exists, else fallback to first responsibility or N/A
            const roleText =
              work.role ??
              (work.responsibilities.length > 0
                ? work.responsibilities[0]
                : "N/A");

            return (
              <article
                key={i}
                className="border-b border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm"
                onClick={() => setExpandedWorkIndex(isExpanded ? null : i)}
              >
                {/* Position + toggle button */}
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-semibold text-[var(--color-accent-2)]">
                    {work.position}
                  </h3>
                  <button
                    // onClick={() => setExpandedWorkIndex(isExpanded ? null : i)}
                    aria-expanded={isExpanded}
                    aria-label={`${
                      isExpanded ? "Collapse" : "Expand"
                    } details for ${work.position}`}
                    className="text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)] transition"
                  >
                    {isExpanded ? "▲" : "▼"}
                  </button>
                </div>

                <p className="italic text-sm text-[var(--color-text-soft)] mb-4">
                  {work.companyName} — {work.workPeriod.start} to{" "}
                  {work.workPeriod.end ?? "Present"} — {work.location}
                </p>

                {/* Collapsed view: Role + Tech Stack */}
                {!isExpanded && (
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)]">
                      <strong>Role:</strong> {roleText}
                    </p>

                    <div className="flex flex-wrap gap-2 max-w-xs">
                      {work.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[var(--color-bg)] text-sm bg-[var(--color-text-soft)] border border-[var(--color-text-soft)] rounded px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded view: All details */}
                <div
                  className={`mt-4 space-y-6 text-[var(--color-text-dark)] dark:text-[var(--color-text-soft)] transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
                    isExpanded
                      ? "max-h-[1000px] opacity-100 pointer-events-auto"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                    {/* Projects */}
                    <div className="sm:w-1/2">
                      <h4 className="font-semibold mb-2">Projects</h4>
                      <ul className="list-disc list-inside">
                        {work.projectsWorkedOn.length > 0 ? (
                          work.projectsWorkedOn.map((p, idx) => (
                            <li key={idx}>
                              {p.link ? (
                                <a
                                  href={p.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[var(--color-text-soft)] hover:underline underline"
                                >
                                  {p.name}
                                </a>
                              ) : (
                                p.name
                              )}
                            </li>
                          ))
                        ) : (
                          <li>N/A</li>
                        )}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div className="sm:w-1/2">
                      <h4 className="font-semibold mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside">
                        {work.responsibilities.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack chips */}
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[var(--color-bg)] text-sm bg-[var(--color-text-soft)] border border-[var(--color-text-soft)] rounded px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills Gained */}
                  <div>
                    <h4 className="font-semibold mb-2">Skills Gained</h4>
                    <ul className="list-disc list-inside">
                      {work.skillsGained.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Education */}
        <section
          className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-6"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)]  border-[var(--color-text-dark)] pb-2">
            <RoleIcon />
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

                  <a
                    href={edu.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-[var(--color-text-soft)] hover:underline"
                  >
                    {edu.institutionName}
                  </a>

                  <p className="text-md text-[var(--color-text-soft)] mt-1">
                    ({edu.year.start} - {edu.year.end}) ||
                    <span className="text-[var(--color-bg)] bg-[var(--color-text-soft)] px-2 py-0.5 rounded ml-1">
                      {edu.grade}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Summary */}
        <section
          className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6border-[var(--color-text-dark)] pb-2">
            <SkillsIcon /> Skills Summary
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
        {/* {language spoken } */}
        <section
          className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b border-[var(--color-text-dark)] pb-2 mb-6">
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
        {/* Certificates Section */}
        <section
          className="rounded-xl transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 mt-8"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] border-b-2 border-[var(--color-text-dark)] pb-2 mb-4">
            <RoleIcon /> Certificates
          </h2>

          {/* Scrollable container */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--color-accent-2)] scrollbar-track-transparent pb-2">
            <div className="flex gap-4 min-w-max">
              {aboutMe.certificates.map(
                ({
                  courseName,
                  certificateLink,
                  skillsGained,
                  issuedBy,
                  year,
                }) => (
                  <div
                    key={courseName}
                    className="w-72 flex-shrink-0  rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
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

        {/* Interpersonal Skills */}
        <section
          className="rounded-xl  transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-accent-2)] p-6 space-y-3"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-text-dark)] pb-2">
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
            <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-text-dark)] pb-2">
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
            <h2 className="text-3xl font-bold flex items-center gap-3 text-[var(--color-text-dark)] p-6 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] border-[var(--color-text-dark)] pb-2">
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

        {/* Extracurriculars */}
        {aboutMe.extracurriculars?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
              Extracurriculars
            </h2>
            <ul className="space-y-4 text-[var(--color-text-dark)]">
              {aboutMe.extracurriculars.map(
                ({ title, description, year }, idx) => (
                  <li
                    key={idx}
                    className="p-4 border border-gray-300 rounded-lg hover:shadow-md"
                  >
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm italic">{year}</p>
                    <p className="mt-1">{description}</p>
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {/* Publications */}
        {aboutMe.publications?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
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
        )}

        {/* Volunteering */}
        {aboutMe.volunteering?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
              Volunteering
            </h2>
            <ul className="space-y-4 text-[var(--color-text-dark)]">
              {aboutMe.volunteering.map(
                ({ organization, role, start, end, description }, idx) => (
                  <li
                    key={idx}
                    className="p-4 border border-gray-300 rounded-lg hover:shadow-md"
                  >
                    <h3 className="font-semibold text-lg">{role}</h3>
                    <p className="text-sm italic">
                      {organization} ({start} — {end})
                    </p>
                    <p className="mt-1">{description}</p>
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {/* Awards */}
        {aboutMe.awards?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
              Awards
            </h2>
            <ul className="space-y-4 text-[var(--color-text-dark)]">
              {aboutMe.awards.map(
                ({ title, issuer, year, description }, idx) => (
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
                )
              )}
            </ul>
          </section>
        )}

        {/* Speaking Events */}
        {aboutMe.speakingEvents?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
              Speaking Events
            </h2>
            <ul className="space-y-4 text-[var(--color-text-dark)]">
              {aboutMe.speakingEvents.map(
                ({ title, event, date, link }, idx) => (
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
                      {event} — {new Date(date).toLocaleDateString()}
                    </p>
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {/* Open Source Contributions */}
        {aboutMe.openSource?.length > 0 && (
          <section
            className="rounded-xl p-6 space-y-4 mt-8 transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <h2 className="text-3xl font-bold border-b-2 border-[var(--color-text-dark)] text-[var(--color-text-dark)] pb-2">
              Open Source Contributions
            </h2>
            <ul className="space-y-4 text-[var(--color-text-dark)]">
              {aboutMe.openSource.map(
                ({ projectName, description, link }, idx) => (
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
                      {projectName}
                    </a>
                    <p className="mt-1">{description}</p>
                  </li>
                )
              )}
            </ul>
          </section>
        )}
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
