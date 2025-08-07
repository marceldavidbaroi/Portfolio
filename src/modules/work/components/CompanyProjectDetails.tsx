import React, { useEffect, useState } from "react";
import type { CompanyProject } from "../../../types/CompanyProjectDetails";

// --- IconWrapper and Icons (reuse from your PersonalProjectDetails) ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg
    className="w-6 h-6 mr-2 flex-shrink-0"
    stroke="currentColor"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ color: "var(--color-text-soft)" }}
  >
    {children}
  </svg>
);

const icons = {
  link: (
    <IconWrapper>
      <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
      <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
    </IconWrapper>
  ),
  overview: (
    <IconWrapper>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </IconWrapper>
  ),
  responsibility: (
    <IconWrapper>
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a8.38 8.38 0 0113 0" />
    </IconWrapper>
  ),
  stack: (
    <IconWrapper>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
    </IconWrapper>
  ),
  skills: (
    <IconWrapper>
      <path d="M12 2l3 7h7l-5.5 4.5 2 7-6-4-6 4 2-7L2 9h7z" />
    </IconWrapper>
  ),
  lessons: (
    <IconWrapper>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </IconWrapper>
  ),
  lacking: (
    <IconWrapper>
      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      <circle cx="12" cy="12" r="9" />
    </IconWrapper>
  ),
  challenge: (
    <IconWrapper>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </IconWrapper>
  ),
  future: (
    <IconWrapper>
      <path d="M12 2v20" />
      <path d="M2 12h20" />
    </IconWrapper>
  ),
};

const CompanyProjectDetails: React.FC<{ project: CompanyProject }> = ({ project }) => {
  const [scrolled, setScrolled] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Banner */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 flex items-center justify-center transition-all duration-700 ease-in-out overflow-y-auto
          ${scrolled ? "opacity-0 scale-95 -translate-y-10 pointer-events-none" : "opacity-100 scale-100"}
        `}
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text-dark)",
        }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wide mb-40 text-center">
          {project.title}
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pt-[100vh] pb-20 space-y-12" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-dark)" }}>
        {/* Links */}
        <section className="flex flex-wrap items-center gap-6 text-[var(--color-text-soft)] font-semibold">
          {icons.link}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--color-accent-2)]">
              GitHub
            </a>
          )}
          {project.liveLinks?.map((link, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[var(--color-accent-2)]"
            >
              Live {idx + 1}
            </a>
          ))}
        </section>

        {/* Overview */}
        <section className="space-y-4 border-b border-[var(--color-text-soft)] pb-4">
          <h2 className="text-3xl font-semibold flex items-center">{icons.overview} Project Overview</h2>
          <p className="text-lg text-[var(--color-text-soft)]">{project.longDescription}</p>
        </section>

        {/* Responsibilities */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center border-b pb-2 border-[var(--color-text-soft)]">
            {icons.responsibility} Responsibilities
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[var(--color-text-soft)]">
            {project.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </section>

        {/* Contributions */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-[var(--color-text-soft)]">Detailed Contributions</h3>
          <div className="space-y-6">
            {project.contributions.map((contrib, idx) => (
              <div key={idx} className="p-4 rounded-lg shadow border border-gray-300 bg-[var(--color-bg)]">
                <h4 className="font-semibold text-xl mb-1">{contrib.responsibility}</h4>
                <p className="text-[var(--color-text-soft)] mb-2">{contrib.description}</p>
                {contrib.technologiesUsed?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {contrib.technologiesUsed.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-700 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 flex items-center border-b pb-2 border-[var(--color-text-soft)]">
            {icons.stack} Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, i) => (
              <span key={i} className="px-4 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges / Lessons / Skills / Lacking */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold flex items-center border-b pb-2 mb-3 border-[var(--color-text-soft)]">
              {icons.challenge} Challenges
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-soft)]">
              {project.challengesFaced.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center border-b pb-2 mb-3 border-[var(--color-text-soft)]">
              {icons.lessons} Lessons Learned
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-soft)]">
              {project.lessonsLearned.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center border-b pb-2 mb-3 border-[var(--color-text-soft)]">
              {icons.skills} Skills Gained
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-soft)]">
              {project.skillsGained.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center border-b pb-2 mb-3 border-[var(--color-text-soft)]">
              {icons.lacking} Lacking
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.lacking}</p>
          </div>
        </section>

        {/* Future Plan */}
        {project.futurePlan && (
          <section>
            <h3 className="text-2xl font-semibold flex items-center border-b pb-2 mb-3 border-[var(--color-text-soft)]">
              {icons.future} Future Plan
            </h3>
            <p className="text-[var(--color-text-soft)]">{project.futurePlan}</p>
          </section>
        )}

        {/* Image Gallery */}
        {project.images?.length > 0 && (
          <section>
            <h3 className="text-2xl font-semibold mb-4">Project Screenshots</h3>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 py-2">
                {project.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="object-cover w-64 h-40 rounded-lg shadow-md transform hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => setModalImage(src)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Modal Image Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500"
            onClick={() => setModalImage(null)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Modal Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default CompanyProjectDetails;
