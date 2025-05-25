export const clampTypographyMap = {
    Title1: {
      min: 28,
      preferredVW: 1.5,
      base: 16, // acts like `1rem`
      max: 40,
    },
    Title2: {
      min: 24,
      preferredVW: 1.2,
      base: 14,
      max: 32,
    },
    Subtitle1: {
      min: 20,
      preferredVW: 1,
      base: 12,
      max: 28,
    },
    // Add other presets as needed
  } as const;
  
  export type ClampTypographyPreset = keyof typeof clampTypographyMap;
  