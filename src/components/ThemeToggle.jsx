"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Custom hook to initialize theme on every page load
export function useTheme() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
}

export default function ThemeToggle({ cssClass }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check local storage or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className={`${cssClass} focus:outline-none`}>
      {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
