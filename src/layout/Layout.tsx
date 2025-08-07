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
    href: "mailto:email@example.com",
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
    href: "tel:+1234567890",
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
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
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
      className="flex min-h-screen bg-[var(--color-bg)] font-terminal font-normal overflow-x-hidden"
      style={{ fontStyle: "normal" }}
    >
      {/* Sidebar */}
      <nav
        className="
          fixed top-0 left-0
          bg-[var(--color-bg)] text-[var(--color-text-soft)]
          h-screen
          w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24
          py-4
          box-border
          flex flex-col items-center justify-between
          flex-shrink-0
          z-50
        "
      >
        {/* Top - Contacts icons or rotated link */}
        <div className="flex flex-col items-center justify-center select-none whitespace-nowrap space-y-4">
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
            <div className="writing-vertical rotate-270 text-[var(--color-accent-1)] font-bold text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg">
              <Link to={`/${topText.toLowerCase() || "home"}`} className="no-underline">
                {topText}
              </Link>
            </div>
          )}
        </div>

        {/* Divider line */}
        <div className="w-1/2 h-px bg-[var(--color-accent-2)] rotate-90 my-6" />

        {/* Bottom section */}
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <div className="writing-vertical rotate-270 text-[var(--color-text-soft)] select-none text-[8px] sm:text-[9px] md:text-xs lg:text-sm xl:text-base whitespace-nowrap">
            © 2025
          </div>

          {/* Dark mode toggle button */}
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
          flex-grow min-w-0 min-h-screen px-5 sm:px-8 md:px-12
          ml-12 sm:ml-14 md:ml-16 lg:ml-20 xl:ml-24
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
