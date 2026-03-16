"use client";

import { useEffect, useMemo, useState } from "react";

import type { ThemeMode } from "@/styles/theme";

const STORAGE_KEY = "portfolio-theme";

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === "dark" || saved === "light") {
      return saved;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const isDark = useMemo(() => mode === "dark", [mode]);

  return {
    mode,
    isDark,
    toggleMode: () => setMode((current) => (current === "light" ? "dark" : "light")),
  };
}
