"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // On mount, set default to light mode unless user has toggled before
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-lg border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between px-6 sm:px-12 py-3 w-full">
        <span className="font-bold text-lg tracking-tight"></span>
        <div className="flex-1" />
        <ul className="flex gap-6 text-sm items-center">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline underline-offset-4 transition-colors">
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="ml-4 p-2 rounded hover:bg-foreground/10 transition flex items-center justify-center"
        >
          {theme === "dark" ? (
            <FaSun size={20} />
          ) : (
            <FaMoon size={20} />
          )}
        </button>
      </div>
    </nav>
  );
} 