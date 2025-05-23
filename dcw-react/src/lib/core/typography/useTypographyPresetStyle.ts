import { useResponsiveTypography } from './useResponsiveTypography';
import { typographyTokens, TypographyPreset } from './typographyTokens';
import { clampTypographyMap } from './clampTypographyMap';
import { computeClamp } from './utils/computeClamp';

export function useTypographyPresetStyle(preset: TypographyPreset): React.CSSProperties {
  const token = typographyTokens[preset];

  // Call hook unconditionally with a safe fallback value
  const fallbackResponsiveStyle = useResponsiveTypography(token.fontSize ?? 16, {
    fontWeight: token.fontWeight,
    lineHeight: token.lineHeight,
  });

  if (preset in clampTypographyMap) {
    return {
      fontSize: computeClamp(clampTypographyMap[preset]),
      fontWeight: token.fontWeight,
      lineHeight: token.lineHeight ? `${token.lineHeight}px` : undefined,
    };
  }

  return fallbackResponsiveStyle;
}