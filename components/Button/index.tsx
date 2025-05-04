import clsx from 'clsx';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface IButtonVariant {
  variant?: 'dark' | 'light';
}

interface IButtonProps
  extends IButtonVariant,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  variant = 'dark',
  className,
  ...rest
}: IButtonProps) {
  const computedClassName = clsx({
    [className ?? '']: true,
    [variant]: true,
    ['button']: true,
  });

  return <button className={computedClassName} {...rest} />;
}

interface ILinkButtonProps
  extends IButtonVariant,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

export function LinkButton({
  variant = 'dark',
  className,
  ...rest
}: ILinkButtonProps) {
  const computedClassName = clsx({
    [className ?? '']: true,
    [variant]: true,
    ['link-button']: true,
  });

  return <a className={computedClassName} {...rest} />;
}
