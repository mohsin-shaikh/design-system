import React, { type ComponentProps, type ReactNode, forwardRef } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'gray';
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    iconPosition?: 'before' | 'after';
    darkMode?: boolean;
}

/**
 * INFO: <HTMLButtonElement | HTMLAnchorElement, ButtonProps>
 */
const Link = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    children,
    className,
    color = 'primary',
    type = 'button',
    href,
    disabled = false,
    size = 'md',
    icon,
    iconPosition = 'before',
    darkMode = false,
    ...props
}, ref) => {
    const isLink = typeof href !== 'undefined'
    const Component = isLink ? 'a' : 'button'
    const theirProps = props as object
    const baseClassNames = {
        // Common
        'zuupee-link inline-flex items-center justify-center gap-0.5 font-medium outline-none hover:underline focus:underline': true,
        'opacity-70 cursor-not-allowed pointer-events-none': disabled,
        'text-sm': size === 'sm',
        'text-lg': size === 'lg',
        'text-primary-600 hover:text-primary-500': color === 'primary',
        'text-danger-600 hover:text-danger-500': color === 'danger',
        'text-gray-600 hover:text-gray-500': color === 'secondary',
        'text-success-600 hover:text-success-500': color === 'success',
        'text-warning-600 hover:text-warning-500': color === 'warning',
        'dark:text-primary-500 dark:hover:text-primary-400': color === 'primary' && darkMode,
        'dark:text-danger-500 dark:hover:text-danger-400': color === 'danger' && darkMode,
        'dark:text-gray-300 dark:hover:text-gray-200': color === 'secondary' && darkMode,
        'dark:text-success-500 dark:hover:text-success-400': color === 'success' && darkMode,
        'dark:text-warning-500 dark:hover:text-warning-400': color === 'warning' && darkMode,
    }
    const mergedClassName = classNames([baseClassNames, className])
    return (<>
        <Component
            ref={ref as never}
            href={href}
            type={isLink ? undefined : type}
            className={mergedClassName}
            disabled={disabled}
            {...theirProps}
        >
            {children}
        </Component>
    </>)
})

Link.displayName = 'Link'

export default Link
