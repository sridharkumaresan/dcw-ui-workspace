import { DefaultButton, IButtonProps } from '@fluentui/react';
import classNames from 'classnames';
import './Button.scss';

type CustomButtonProps = IButtonProps & {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  variant = 'primary',
  className,
  isLoading = false,
  disabled,
  text,
  ...rest
}: CustomButtonProps) => {
  const buttonClass = classNames('dcw-button', `dcw-button--${variant}`, className);
  return (
    <DefaultButton
      className={buttonClass}
      disabled={isLoading || disabled}
      text={isLoading ? 'Loading...' : text}
      {...rest}
    />
  );
};