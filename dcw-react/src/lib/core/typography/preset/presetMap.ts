/**
 * List of preset token sets.
 * 'default' uses Fluent-based styles.
 * 'marketing' uses more expressive fluid typography.
 */
import {
  TypographyTokenMap,
  defaultTypographyTokens,
} from '../tokens/typographyTokens';

const marketing: TypographyTokenMap = {
  Display: {
    fontSize: 'clamp(3.5rem, 6vw + 1rem, 6rem)',
    fontWeight: 900,
    lineHeight: '1.1',
  },
  LargeTitle: {
    fontSize: 'clamp(2.75rem, 4vw + 1rem, 4.5rem)',
    fontWeight: 800,
    lineHeight: '1.15',
  },
  Title1: {
    fontSize: 'clamp(2rem, 3vw + 1rem, 3.25rem)',
    fontWeight: 700,
    lineHeight: '1.2',
  },
  Title2: {
    fontSize: 'clamp(1.75rem, 2vw + 0.75rem, 2.5rem)',
    fontWeight: 700,
    lineHeight: '1.3',
  },
  Body1: {
    fontSize: 'clamp(1.125rem, 1vw + 0.5rem, 1.25rem)',
    fontWeight: 400,
    lineHeight: '1.6',
  },
  Caption1Stronger: {
    fontSize: 'clamp(0.875rem, 0.4vw + 0.25rem, 1rem)',
    fontWeight: 600,
    lineHeight: '1.4',
  },
};

export const presetMap = {
  default: defaultTypographyTokens,
  marketing: marketing,
};

/**
 * Returns a preset token set by name.
 */
export const getTypographyPreset = (
  preset: keyof typeof presetMap = 'default'
) => presetMap[preset];
