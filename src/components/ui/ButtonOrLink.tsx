import { ComponentProps } from 'react';
import Link from 'next/link';

type Props = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ButtonOrLinkProps extends Props { }

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
    const isLink = typeof href !== 'undefined';
    const ButtonOrLink = isLink ? 'a' : 'button';

    let content = <ButtonOrLink {...props} />;

    if (isLink) {
        return <Link legacyBehavior href={href}>{content}</Link>;
    }

    return content;
}
