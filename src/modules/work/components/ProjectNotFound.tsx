import React from "react";
import { Link } from "react-router-dom";

// Optional inline icon
const AlertTriangle = () => (
  <svg
    className="w-16 h-16 mb-4 text-[color:var(--color-accent-2)]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z"
    />
  </svg>
);

const ProjectNotFound: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 py-16 text-center min-h-[70vh]"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text-dark)" }}
    >
      <AlertTriangle />

      <h1
        className="text-4xl md:text-5xl font-bold mb-2 font-terminal"
        style={{ color: "var(--color-text-dark)" }}
      >
        Project Not Found
      </h1>

      <p
        className="text-lg mb-1 font-terminal"
        style={{ color: "var(--color-text-soft)" }}
      >
        Sorry, we couldn't find a project with ID:
        <span
          className="ml-1 font-bold"
          style={{ color: "var(--color-accent-2)" }}
        >
          {id}
        </span>
      </p>

      <p
        className="text-base mb-6 font-terminal"
        style={{ color: "var(--color-text-soft)" }}
      >
        It might have been removed or the URL is incorrect.
      </p>

      <Link
        to="/"
        className="font-terminal text-base underline hover:opacity-80"
        style={{ color: "var(--color-accent-1)" }}
      >
        ← Back to Home
      </Link>

      {/* <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="Project not found illustration"
        className="mt-10 max-w-sm w-full"
      /> */}

      {/* Light mode image */}
{/* <img
  src="https://illustrations.popsy.co/white/resistance-band.svg"
  alt="Project not found illustration"
  className="mt-10 max-w-sm w-full dark:invert"
/>   */}
    </div>
  );
};

export default ProjectNotFound;
