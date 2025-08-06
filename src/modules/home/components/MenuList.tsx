import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuListProps {
  items: string[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <ul
      className="text-7xl space-y-6 md:text-6xl lg:text-9xl font-semibold text-center md:text-left"
      style={{ color: "var(--color-text-dark)" }}
    >
      {" "}
      {items.map((item, index) => {
        const route = `/${item.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li
            key={index}
            className="cursor-pointer transition duration-200"
            style={{
              color: "var(--color-text-dark)",
            }}
            onClick={() => navigate(route)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--color-accent-1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--color-text-dark)";
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
