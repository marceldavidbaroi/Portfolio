import React from "react";
import { Link } from "react-router-dom";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  stack: string[];
  company?: string;
}

interface Props {
  items: WorkItem[];
}

const ProjectList: React.FC<Props> = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <Link
          to={`/work/${item.id}`}
          key={item.id}
          className="block group px-4 pb-6 border-b border-[var(--color-accent-2)] transition-all duration-300 hover:shadow-xl hover:bg-[var(--color-bg-soft)] rounded-md"
        >
          {/* Title */}
          <h2 className="text-7xl font-bold text-[var(--color-text-dark)] mb-2">
            {item.title}
          </h2>

          {/* Company + Stack */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-text-soft)] mb-1">
            <span className="italic">{item.company || "Personal"}</span>
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="bg-[var(--color-accent-2)] text-[var(--color-bg)] px-1.5 py-0.5 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description: hidden by default, shown on hover without space when hidden */}
          <p
            className="text-sm text-[var(--color-text-soft)] max-w-prose opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out"
            style={{ transitionProperty: "opacity, visibility" }}
          >
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
