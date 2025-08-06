import React from "react";
import MenuList from "../components/MenuList";

const HomeIndex: React.FC = () => {
  const menuItems: string[] = ["Work", "About Me", "Contact"];

  return (
    <div
      className="relative min-h-full min-w-full flex flex-col md:flex-row items-stretch box-border"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Left Column */}
      <div
        className="w-full md:w-1/2 lg:w-1/3 flex items-end px-4 sm:px-6 md:px-16 py-6 sm:py-8 md:py-20 box-border pt-32 sm:pt-0"
      >
        <div className="text-center md:text-left w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-terminal text-amber-600 mb-2">
            Marcel David
          </h1>
          <h2
            className="text-lg sm:text-xl md:text-2xl mb-2"
            style={{ color: "var(--color-text-dark)" }}
          >
            Jr Software Engineer
          </h2>
          <p
            className="text-xs sm:text-sm md:text-base"
            style={{ color: "var(--color-text-soft)" }}
          >
            Eager to learn and develop
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 lg:w-2/3 relative flex items-center justify-center px-4 sm:px-6 md:px-16 py-8 sm:py-12 md:py-16 box-border pt-32 sm:pt-0">
        <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-none">
          <MenuList items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
