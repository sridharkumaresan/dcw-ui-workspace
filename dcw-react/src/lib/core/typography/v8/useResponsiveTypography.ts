import { useEffect, useState } from 'react';
import { TypographyConfig } from './TypographyConfig';

type ResponsiveTypographyOptions = {
  fontWeight?: number;
  lineHeight?: number;
};

export function useResponsiveTypography(
  baseFontSize: number,
  options: ResponsiveTypographyOptions = {}
): React.CSSProperties {
  const { fontWeight, lineHeight } = options;

  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < TypographyConfig.mobileBreakpoint
  );

  useEffect(() => {
    const handler = () =>
      setIsMobile(window.innerWidth < TypographyConfig.mobileBreakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const shouldReduce = isMobile && baseFontSize > 20;

  return {
    fontSize: shouldReduce
      ? `${Math.round(baseFontSize * TypographyConfig.reductionRatio)}px`
      : `${baseFontSize}px`,
    fontWeight:
      shouldReduce && fontWeight ? Math.max(400, fontWeight - 100) : fontWeight,
    lineHeight:
      shouldReduce && lineHeight
        ? `${Math.round(
            lineHeight * TypographyConfig.defaultLineHeightScale
          )}px`
        : lineHeight
        ? `${lineHeight}px`
        : undefined,
  };
}
