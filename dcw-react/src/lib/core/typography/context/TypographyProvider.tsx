import * as React from 'react';
import {
  TypographyTokenMap,
  defaultTypographyTokens,
} from '../tokens/typographyTokens';

const TypographyContext = React.createContext<TypographyTokenMap>(
  defaultTypographyTokens
);

export const TypographyProvider = ({
  tokens,
  children,
}: {
  tokens?: TypographyTokenMap;
  children: React.ReactNode;
}) => {
  return (
    <TypographyContext.Provider value={tokens ?? defaultTypographyTokens}>
      {children}
    </TypographyContext.Provider>
  );
};

export const useTypographyTokens = () => React.useContext(TypographyContext);
