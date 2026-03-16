"use client";

import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { useThemeMode } from "@/hooks/useThemeMode";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme, type ThemeMode } from "@/styles/theme";

type ThemeModeContextData = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextData | undefined>(undefined);

export function useThemeModeContext() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeModeContext must be used within Providers");
  }

  return context;
}

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const { mode, toggleMode } = useThemeMode();

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme[mode]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
