/**
 * Utility to convert a TypographyTokenMap into Griffel-compatible static style definitions.
 * Used in makeStyles() at the module level.
 */
import { makeStyles } from '@fluentui/react-components';
import { TypographyTokenMap } from './typographyTokens';

export const createTypographyStylesFromTokens = (tokens: TypographyTokenMap) => {
  const styles = Object.fromEntries(
    Object.entries(tokens).map(([preset, token]) => [
      preset,
      {
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
      },
    ])
  );

  return makeStyles(styles);
};
