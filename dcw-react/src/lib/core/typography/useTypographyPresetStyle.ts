import { useResponsiveTypography } from './useResponsiveTypography';
import { typographyTokens, TypographyPreset } from './typographyTokens';
import { clampTypographyMap } from './clampTypographyMap';
import { computeClamp } from './utils/computeClamp';

export function useTypographyPresetStyle(preset: TypographyPreset): React.CSSProperties {
  const token = typographyTokens[preset];

  const responsiveStyle = token.fontSize
    ? useResponsiveTypography(token.fontSize, {
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
      })
    : {
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight ? `${token.lineHeight}px` : undefined,
      };

  if (preset in clampTypographyMap) {
    return {
      fontSize: computeClamp(clampTypographyMap[preset]),
      fontWeight: token.fontWeight,
      lineHeight: token.lineHeight ? `${token.lineHeight}px` : undefined,
    };
  }

  return responsiveStyle;
}