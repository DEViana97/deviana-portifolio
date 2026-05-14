"use client";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@/styles/globalStyles";
import { darkTheme } from "@/styles/theme";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
