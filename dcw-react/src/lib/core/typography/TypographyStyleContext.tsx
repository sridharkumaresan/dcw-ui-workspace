import React, { createContext, useContext } from 'react';
import { TypographyPreset } from './typographyTokens';
import { useTypographyPresetStyle } from './useTypographyPresetStyle';

type TypographyStyleContextType = {
  getStyle: (preset: TypographyPreset) => React.CSSProperties;
};

const TypographyStyleContext = createContext<TypographyStyleContextType | null>(null);

export const TypographyStyleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TypographyStyleContext.Provider value={{ getStyle: useTypographyPresetStyle }}>
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