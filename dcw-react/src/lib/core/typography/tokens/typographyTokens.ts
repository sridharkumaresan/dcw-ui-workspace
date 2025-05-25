import { tokens } from '@fluentui/react-components';

/**
 * Known preset keys supported by <FluidText />
 * You can extend this list as needed.
 */
export type TypographyPreset =
  | 'Display'
  | 'LargeTitle'
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Subtitle1'
  | 'Subtitle2'
  | 'Subtitle2Stronger'
  | 'Body1'
  | 'Body1Strong'
  | 'Body1Stronger'
  | 'Body2'
  | 'Caption1Stronger';

/**
 * Structure of a single typography token config
 */
export type TypographyTokenMap = {
  [key in TypographyPreset]?: {
    fontSize: string;
    fontWeight: string | number;
    lineHeight: string;
  };
};

/**
 * Default tokens based on Fluent UI's design system
 */
export const defaultTypographyTokens = {
  Body1: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase400,
  },
  Body1Strong: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
  },
  Body1Stronger: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightBold,
    lineHeight: tokens.lineHeightBase400,
  },
  Body2: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase300,
  },
  Subtitle2: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase500,
  },
  Subtitle2Stronger: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase500,
  },
  Subtitle1: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase600,
  },
  Title3: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightHero700,
  },
  Title2: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightHero800,
  },
  Title1: {
    fontSize: 'clamp(2rem, 1.75vw + 0.75rem, 2.5rem)',
    fontWeight: tokens.fontWeightBold,
    lineHeight: '40px',
  },
  LargeTitle: {
    fontSize: 'clamp(2.25rem, 2vw + 0.75rem, 2.75rem)',
    fontWeight: tokens.fontWeightBold,
    lineHeight: '44px',
  },
  Display: {
    fontSize: 'clamp(3rem, 3vw + 1rem, 4rem)',
    fontWeight: tokens.fontWeightBold,
    lineHeight: '56px',
  },
  Caption1Stronger: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
  },
} as const;


