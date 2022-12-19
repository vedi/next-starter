import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React, { ComponentProps } from 'react';

export interface AppLinkProps
  extends NextLinkProps,
    Omit<ComponentProps<'a'>, keyof NextLinkProps> {
  children: React.ReactNode;
}

export function AppLink({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...rest
}: AppLinkProps) {
  return (
    // TODO: Settle
    // @ts-ignore
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      {/* eslint-disable-line react/jsx-props-no-spreading */ ... rest}
    />
  );
}
