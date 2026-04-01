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
        className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 transition"
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