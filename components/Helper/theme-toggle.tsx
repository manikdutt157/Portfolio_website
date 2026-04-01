"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm "
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-2 right-6 z-50 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground transition-all" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-all" />
      )}
    </button>
  );
}