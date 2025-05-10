import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlClass = document.documentElement.classList.contains("dark");
    return savedTheme === "dark" || (!savedTheme && htmlClass) ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden group border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500/50 dark:hover:border-purple-500/70 transition-colors duration-300"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-400/0 group-hover:from-purple-600/10 group-hover:to-cyan-400/10 dark:group-hover:from-purple-600/20 dark:group-hover:to-cyan-400/20 transition-all duration-300"></div>

      {/* Sun icon with enhanced animation */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-yellow-500 group-hover:text-yellow-600" />

      {/* Moon icon with enhanced animation */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-purple-400 dark:text-purple-300 group-hover:text-purple-500 dark:group-hover:text-purple-400" />

      {/* Ripple effect on click */}
      <span className="absolute inset-0 w-full h-full bg-white/20 dark:bg-purple-500/20 rounded-full scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-500"></span>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
