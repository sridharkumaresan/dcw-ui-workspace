import React, { createContext, useContext } from 'react';
import { useResponsiveTypography } from './useResponsiveTypography';
import { typographyTokens, TypographyPreset } from './typographyTokens';
import { clampTypographyMap } from './clampTypographyMap';
import { computeClamp } from './utils/computeClamp';

type TypographyStyleContextType = {
  getStyle: (preset: TypographyPreset) => React.CSSProperties;
};

const TypographyStyleContext = createContext<TypographyStyleContextType | null>(null);

export const TypographyStyleProvider = ({ children }: { children: React.ReactNode }) => {
  const getStyle = (preset: TypographyPreset): React.CSSProperties => {
    const token = typographyTokens[preset];

    if (preset in clampTypographyMap) {
      return {
        fontSize: computeClamp(clampTypographyMap[preset]),
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight ? `${token.lineHeight}px` : undefined,
      };
    }

    return useResponsiveTypography(token.fontSize, {
      fontWeight: token.fontWeight,
      lineHeight: token.lineHeight,
    });
  };

  return (
    <TypographyStyleContext.Provider value={{ getStyle }}>
      {children}
    </TypographyStyleContext.Provider>
  );
};

export const useTypographyStyle = () => {
  const context = useContext(TypographyStyleContext);
  if (!context) {
    throw new Error('useTypographyStyle must be used within TypographyStyleProvider');
  }
  return context.getStyle;
};