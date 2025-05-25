import { makeStyles } from '@fluentui/react-components';
import { useTypographyTokens } from '../context/TypographyProvider';
import { TypographyPreset } from '../tokens/typographyTokens';

// Load default tokens at module level
import { defaultTypographyTokens } from '../tokens/typographyTokens';

// Build style map once for default tokens only
const staticStyles = Object.fromEntries(
  Object.entries(defaultTypographyTokens).map(([preset, token]) => [
    preset,
    {
      fontSize: token.fontSize,
      fontWeight: token.fontWeight,
      lineHeight: token.lineHeight,
    },
  ])
);

const useStaticStyles = makeStyles(staticStyles);

export const useTypographyClassName = (
  preset: TypographyPreset
): { className?: string; style?: React.CSSProperties } => {
  const tokenMap = useTypographyTokens();

  const styles = useStaticStyles();

  // Use Griffel only if using default tokens
  const isUsingDefault = tokenMap === defaultTypographyTokens;

  if (isUsingDefault && styles[preset]) {
    return { className: styles[preset] };
  }

  // Fallback for marketing/custom tokens
  const token = tokenMap[preset];
  return {
    style: {
      fontSize: token?.fontSize,
      fontWeight: token?.fontWeight,
      lineHeight: token?.lineHeight,
    },
  };
};
