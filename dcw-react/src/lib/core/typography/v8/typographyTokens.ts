// export const typographyTokens = {
//     Title1: { fontSize: 28, fontWeight: 700, lineHeight: 36 },
//     Title2: { fontSize: 24, fontWeight: 600, lineHeight: 32 },
//     Title3: { fontSize: 22, fontWeight: 600, lineHeight: 30 },
//     Subtitle1: { fontSize: 20, fontWeight: 600, lineHeight: 28 },
//     Body2: { fontSize: 16 },
//     Caption1Stronger: { fontSize: 14, fontWeight: 600 },
//   } as const;
  
//   export type TypographyPreset = keyof typeof typographyTokens;
  

// src/typography/typographyTokens.ts

export const typographyTokens = {
    Title1: {
      fontWeight: 700,
      lineHeight: 36
    },
    Title2: {
      fontWeight: 600,
      lineHeight: 32
    },
    Subtitle1: {
      fontWeight: 600,
      lineHeight: 28
    },
    Body2: {
      fontSize: 16,
      lineHeight: 24
    },
    Caption1Stronger: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 20
    }
  } as const;
  
  export type TypographyPreset = keyof typeof typographyTokens;
  