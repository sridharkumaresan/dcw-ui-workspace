import * as React from 'react';
import { mergeClasses } from '@fluentui/react-components';
import { useTypographyClassName } from '../../hooks/useTypographyClassName';
import { TypographyPreset } from './../../tokens/typographyTokens';

export type FluidTextProps<T extends React.ElementType = 'span'> = {
  preset: TypographyPreset;
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export const FluidText = <T extends React.ElementType = 'span'>({
  preset,
  as,
  children,
  className,
  ...rest
}: FluidTextProps<T>) => {
  const Component = as || 'span';
  const { className: presetClass, style } = useTypographyClassName(preset);

  return (
    <Component
      className={mergeClasses(presetClass, className)}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
};
