import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ComponentProps } from 'react';

export interface AppLinkProps
  extends NextLinkProps,
    Omit<ComponentProps<'a'>, keyof NextLinkProps> {}

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
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
    >
      {/* href is passed by NextLink */}
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading */}
      <a {... rest} />
    </NextLink>
  );
}
