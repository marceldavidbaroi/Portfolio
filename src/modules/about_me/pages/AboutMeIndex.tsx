import React, { useState, useEffect } from "react";
import aboutMe from "../../../data/About_me/Me";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import LanguagesSection from "../components/LanguagesSection";
import CertificatesSection from "../components/CertificatesSection";
import InterpersonalSkillsSection from "../components/InterpersonalSkillsSection";
import HobbiesAndInterestsSection from "../components/HobbiesAndInterestsSection";
import PublicationsSection from "../components/PublicationsSection";
import AwardsSction from "../components/AwardsSction";
import ExtracurricularsSection from "../components/ExtracurricularsSection";
import OpenSourceContributionsSection from "../components/OpenSourceContributionsSection";
import SpeakingEventsSection from "../components/SpeakingEventsSection";
import VolunteeringSection from "../components/VolunteeringSection";

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

      <Banner aboutMe={aboutMe} scrolled={scrolled} />

      {/* Main content */}
      <main
        className="max-w-5xl mx-auto p-0 pt-[100vh] space-y-12"
        style={{
          color: "var(--color-text-dark)",
          backgroundColor: "var(--color-bg)",
        }}
      >
        {/* Contact Info */}
        <ContactSection aboutMe={aboutMe} iconMap={iconMap} />

        {/* Work Experience */}

        <WorkExperienceSection aboutMe={aboutMe} />

        {/* Education */}

        <EducationSection aboutMe={aboutMe} />

        {/* Skills Summary */}

        <SkillsSection aboutMe={aboutMe} />
        {/* {language spoken } */}

        <LanguagesSection aboutMe={aboutMe} />
        {/* Certificates Section */}

        <CertificatesSection aboutMe={aboutMe} />

        {/* Interpersonal Skills */}

        <InterpersonalSkillsSection aboutMe={aboutMe} />

        {/* Hobbies and Interests */}

        <HobbiesAndInterestsSection aboutMe={aboutMe} />

        {/* Extracurriculars */}
        {aboutMe.extracurriculars?.length > 0 && (
          <ExtracurricularsSection aboutMe={aboutMe} />
        )}

        {/* Publications */}
        {aboutMe.publications?.length > 0 && (
          <PublicationsSection aboutMe={aboutMe} />
        )}

        {/* Volunteering */}
        {aboutMe.volunteering?.length > 0 && (
          <VolunteeringSection aboutMe={aboutMe} />
        )}

        {/* Awards */}
        {aboutMe.awards?.length > 0 && <AwardsSction aboutMe={aboutMe} />}

        {/* Speaking Events */}
        {aboutMe.speakingEvents?.length > 0 && (
          <SpeakingEventsSection aboutMe={aboutMe} />
        )}

        {/* Open Source Contributions */}
        {aboutMe.openSource?.length > 0 && (
          <OpenSourceContributionsSection aboutMe={aboutMe} />
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
