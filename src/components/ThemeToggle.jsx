import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  // Start state as true to match the new dark default
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    // Check if the user has explicitly chosen "light" before. 
    // If not, or if they chose "dark", we default to dark mode.
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // This is the default path (first-time visit or dark preference)
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      
      // Save "dark" as the preference if it was empty
      if (!storedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-16 sm:right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "hover:bg-primary/10 focus:outline-none"
      )}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};