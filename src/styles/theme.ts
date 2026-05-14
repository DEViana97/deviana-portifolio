export const darkTheme = {
  colors: {
    background:              '#0b1326',
    surface:                 '#0b1326',
    surfaceContainerLowest:  '#060e20',
    surfaceContainerLow:     '#131b2e',
    surfaceContainer:        '#171f33',
    surfaceContainerHigh:    '#222a3d',
    surfaceContainerHighest: '#2d3449',
    onSurface:               '#dae2fd',
    onSurfaceVariant:        '#c7c4d7',
    outline:                 '#908fa0',
    outlineVariant:          '#464554',
    primary:                 '#c0c1ff',
    onPrimary:               '#1000a9',
    secondary:               '#4edea3',
    tertiary:                '#ffb783',
    error:                   '#ffb4ab',
  },
  fonts: {
    display: "'Sora', sans-serif",
    body:    "'Inter', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
};

export type AppTheme = typeof darkTheme;
