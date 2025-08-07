import React from "react";
import aboutMe  from "../../../data/About_me/Me"; // adjust path as needed
import portrait from "/images/profile.jpg"; // replace with actual path

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-dark)] px-4 md:px-12 py-10 font-terminal">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Profile Image */}
        <img
          src={portrait}
          alt={aboutMe.name}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-[var(--color-accent-1)]"
        />

        {/* Basic Info */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)]">
            {aboutMe.name}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-soft)] mt-1">
            {aboutMe.currentPosition}
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            {aboutMe.brief}
          </p>

          {/* Profiles */}
          <div className="mt-4 flex flex-wrap gap-4">
            {aboutMe.profiles.map((profile, i) => (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[var(--color-accent-1)] hover:text-[var(--color-accent-2)]"
              >
                {profile.platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <section className="mt-10">
        <h2 className="text-2xl mb-4 border-b border-[var(--color-accent-1)] pb-2">Work Experience</h2>
        {aboutMe.workExperience.map((exp, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.position} at {exp.companyName}</h3>
            <p className="text-sm text-[var(--color-text-soft)]">{exp.workPeriod.start} - {exp.workPeriod.end}</p>
            <ul className="list-disc ml-6 mt-2 text-base">
              {exp.responsibilities.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-2xl mb-4 border-b border-[var(--color-accent-1)] pb-2">Education</h2>
        {aboutMe.education.map((edu, i) => (
          <div key={i} className="mb-4">
            <h3 className="text-lg font-semibold">{edu.degreeName}</h3>
            <p className="text-base">{edu.institutionName}</p>
            <p className="text-sm text-[var(--color-text-soft)]">{edu.year.start} - {edu.year.end}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-2xl mb-4 border-b border-[var(--color-accent-1)] pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Languages</h4>
            <ul className="list-disc ml-6">
              {aboutMe.skills.languages.map((lang, i) => (
                <li key={i}>{lang.name} ({lang.read ? "Read" : ""} {lang.write ? "Write" : ""} {lang.understand ? "Understand" : ""})</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Soft Skills</h4>
            <ul className="list-disc ml-6">
              {aboutMe.skills.softSkills.map((skill, i) => (
                <li key={i}>{skill.name} - {skill.percentage}%</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hard Skills</h4>
            <ul className="list-disc ml-6">
              {aboutMe.skills.hardSkills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Sections (Hobbies, Interests, etc.) */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutMe.hobbies?.length > 0 && (
          <div>
            <h2 className="text-xl mb-2 border-b border-[var(--color-accent-1)] pb-1">Hobbies</h2>
            <ul className="list-disc ml-6">
              {aboutMe.hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </div>
        )}

        {aboutMe.interests?.length > 0 && (
          <div>
            <h2 className="text-xl mb-2 border-b border-[var(--color-accent-1)] pb-1">Interests</h2>
            <ul className="list-disc ml-6">
              {aboutMe.interests.map((int, i) => (
                <li key={i}>{int}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutMe;
