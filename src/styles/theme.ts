export type ThemeMode = "light" | "dark";

export const lightTheme = {
  mode: "light" as ThemeMode,
  colors: {
    background: "#f5f7fb",
    surface: "#ffffff",
    text: "#132238",
    textMuted: "#4f5d75",
    heading: "#0b1526",
    primary: "#ff6b35",
    primarySoft: "#ffd8c8",
    accent: "#0fa3b1",
    border: "#dde5f0",
    success: "#1f9d55",
    danger: "#c53030",
  },
  gradients: {
    hero: "radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.24), transparent 38%), radial-gradient(circle at 78% 12%, rgba(15, 163, 177, 0.22), transparent 40%), linear-gradient(160deg, #f5f7fb 0%, #ecf2f8 50%, #fef2eb 100%)",
    card: "linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)",
  },
  shadows: {
    card: "0 14px 32px rgba(13, 35, 67, 0.09)",
    focus: "0 0 0 3px rgba(255, 107, 53, 0.25)",
  },
};

export const darkTheme = {
  mode: "dark" as ThemeMode,
  colors: {
    background: "#071320",
    surface: "#0d2034",
    text: "#e5edf7",
    textMuted: "#9fb3c8",
    heading: "#f6fbff",
    primary: "#ff8b5f",
    primarySoft: "#422116",
    accent: "#35c6d4",
    border: "#1f354a",
    success: "#48bb78",
    danger: "#fc8181",
  },
  gradients: {
    hero: "radial-gradient(circle at 20% 20%, rgba(255, 139, 95, 0.18), transparent 36%), radial-gradient(circle at 82% 14%, rgba(53, 198, 212, 0.18), transparent 40%), linear-gradient(160deg, #071320 0%, #0b1a2e 50%, #10263d 100%)",
    card: "linear-gradient(140deg, #0d2034 0%, #122943 100%)",
  },
  shadows: {
    card: "0 18px 38px rgba(1, 7, 15, 0.45)",
    focus: "0 0 0 3px rgba(255, 139, 95, 0.3)",
  },
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export type AppTheme = typeof lightTheme;
