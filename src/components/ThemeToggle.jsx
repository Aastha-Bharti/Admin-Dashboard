import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved === "dark" || (!saved && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const willBeDark = !html.classList.contains("dark");

    html.classList.toggle("dark", willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
    setIsDark(willBeDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg 
                 bg-slate-100 dark:bg-slate-800/80 
                 text-slate-700 dark:text-slate-200 
                 hover:bg-slate-200 dark:hover:bg-slate-700 
                 transition-all duration-500 ease-in-out
                 shadow-sm"
    >
      {/* Smooth icon transition */}
      <Sun
        className={`absolute w-5 h-5 transform transition-all duration-500 ${
          isDark
            ? "opacity-0 rotate-90 scale-75"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`absolute w-5 h-5 transform transition-all duration-500 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
