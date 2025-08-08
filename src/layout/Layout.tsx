import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="12" r={5} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.728 0l-1.414 1.414M6.464 17.536l-1.414 1.414"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke="none"
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
  </svg>
);

// Define your contact buttons here
const contactButtons = [
  {
    label: "Email",
    href: "mailto:marceldavidbaroi@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+8801795774216",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M2 7l4 4-1.5 1.5a11 11 0 005 5L13 18l4 4 3-3-4-4-1.5 1.5-4-4" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/marceldavidbaroi", // Replace with your actual GitHub URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.776.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.624-5.48 5.922.432.37.816 1.102.816 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcel-david-baroi-33861322a/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 5 3.92 6.1 2.5 6.1S0 5 0 3.5 1.06 1 2.48 1s2.5 1.06 2.5 2.5zM0 8.4h5v15.6H0V8.4zm7.3 0h4.8v2.2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.3v9.8h-5v-8.7c0-2-1.3-3-3-3-1.4 0-2 1-2 2v9.7h-5V8.4z" />
      </svg>
    ),
  },
];

const Layout: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [dark]);

  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean); // Remove empty segments
  const pathSegment = location.pathname.split("/")[1] || "";
  const isHomeExact = location.pathname === "/home";
  const topText =
    segments.length > 1
      ? pathSegment
        ? pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1)
        : "Home"
      : "Home";

  return (
    <div
      className="flex min-h-screen bg-[var(--color-bg)] font-terminal font-normal overflow-x-hidden "
      style={{ fontStyle: "normal" }}
    >
      {/* Sidebar */}
      <nav
        className="
    fixed
    top-0 left-0 right-0
    bg-[var(--color-bg)] text-[var(--color-text-soft)]
    h-12
    flex flex-row items-center justify-between px-4
    sm:h-screen sm:w-12 sm:flex-col sm:py-4 sm:box-border sm:flex-shrink-0
    z-50
  "
      >
        <div className="flex flex-row sm:flex-col items-center justify-center select-none whitespace-nowrap space-x-4 sm:space-x-0 sm:space-y-4 w-full sm:w-auto">
          {isHomeExact ? (
            contactButtons.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                title={label}
                className="
            p-1
            text-[var(--color-accent-1)]
            border border-[var(--color-accent-1)]
            rounded
            hover:bg-[var(--color-accent-1)]
            hover:text-[var(--color-bg)]
            transition-colors duration-300
            flex items-center justify-center
            w-8 h-8
          "
              >
                {icon}
              </a>
            ))
          ) : (
            <div className="writing-vertical sm:rotate-270 text-[var(--color-accent-1)] font-bold text-[16px] sm:text-[24px]">
              <Link
                to={`/${topText.toLowerCase() || "home"}`}
                className="no-underline"
              >
                {topText}
              </Link>
            </div>
          )}
        </div>

        {/* Divider line */}
        <div className="hidden sm:block w-full md:w-[350px] h-px bg-[var(--color-accent-2)] rotate-90 my-6"></div>
        <div className="block sm:hidden w-px h-6 bg-[var(--color-accent-2)] mx-2"></div>

        {/* Bottom section */}
        <div className="flex flex-row sm:flex-col items-center space-x-4 sm:space-x-0 sm:space-y-4">
          <div className="select-none text-[8px] sm:text-base whitespace-nowrap writing-vertical sm:rotate-270 text-[var(--color-text-soft)]">
            © 2025
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-1 text-[var(--color-accent-1)] border border-[var(--color-accent-1)] rounded select-none hover:bg-[var(--color-accent-1)] hover:text-[var(--color-bg)] transition-colors duration-300"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            type="button"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="
          flex-grow min-w-0 min-h-screen px-0 sm:px-6 md:px-6
          ml-0 sm:ml-14 md:ml-16 lg:ml-20 xl:ml-24
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
