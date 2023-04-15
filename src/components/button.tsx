import React, { type ComponentProps, type ReactNode, forwardRef } from 'react'
import classNames from 'classnames'

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'gray';
    type?: 'button' | 'submit' | 'reset';
    href?: string;
    target?: string;
    disabled?: boolean;
    outlined?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    iconPosition?: 'before' | 'after';
    darkMode?: boolean;
}

/**
 * INFO: <HTMLButtonElement | HTMLAnchorElement, ButtonProps>
 */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    children,
    className,
    color = 'primary',
    type = 'button',
    href,
    disabled = false,
    outlined = false,
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
        'zuupee-button zuupee-button-size-{$size} inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset': true,
        'dark:focus:ring-offset-0': darkMode,
        'opacity-70 pointer-events-none cursor-not-allowed': disabled,
        'min-h-[2.25rem] px-4 text-sm': size === 'md',
        'min-h-[2rem] px-3 text-sm': size === 'sm',
        'min-h-[2.75rem] px-6 text-lg': size === 'lg',
    }
    const defaultClassNames = {
        // Default
        'text-white shadow focus:ring-white border-transparent': color !== 'secondary',
        'bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700': color === 'primary',
        'bg-success-600 hover:bg-success-500 focus:bg-success-700 focus:ring-offset-success-700': color === 'success',
        'bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700': color === 'danger',
        'bg-warning-600 hover:bg-warning-500 focus:bg-warning-700 focus:ring-offset-warning-700': color === 'warning',
        'bg-gray-600 hover:bg-gray-500 focus:bg-gray-700 focus:ring-offset-gray-700': color === 'gray',
        'text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600': color === 'secondary',
        'dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800': color === 'secondary' && darkMode,
    }
    const outlineClassNames = {
        // Outlined
        'shadow focus:ring-white': color !== 'secondary',
        'text-primary-600 border-primary-600 hover:bg-primary-600/20 focus:bg-primary-700/20 focus:ring-offset-primary-700': color === 'primary',
        'text-success-600 border-success-600 hover:bg-success-600/20 focus:bg-success-700/20 focus:ring-offset-success-700': color === 'success',
        'text-danger-600 border-danger-600 hover:bg-danger-600/20 focus:bg-danger-700/20 focus:ring-offset-danger-700': color === 'danger',
        'text-warning-600 border-warning-600 hover:bg-warning-600/20 focus:bg-warning-700/20 focus:ring-offset-warning-700': color === 'warning',
        'text-gray-600 border-gray-600 hover:bg-gray-600/20 focus:bg-gray-700/20 focus:ring-offset-gray-700': color === 'gray',
        'text-gray-800 border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600': color === 'secondary',
        'dark:text-primary-500 dark:border-primary-500 dark:hover:bg-primary-500/20 dark:focus:bg-primary-600/20 dark:focus:ring-offset-primary-600': color === 'primary' && darkMode,
        'dark:text-success-500 dark:border-success-500 dark:hover:bg-success-500/20 dark:focus:bg-success-600/20 dark:focus:ring-offset-success-600': color === 'success' && darkMode,
        'dark:text-danger-500 dark:border-danger-500 dark:hover:bg-danger-500/20 dark:focus:bg-danger-600/20 dark:focus:ring-offset-danger-600': color === 'danger' && darkMode,
        'dark:text-warning-500 dark:border-warning-500 dark:hover:bg-warning-500/20 dark:focus:bg-warning-600/20 dark:focus:ring-offset-warning-600': color === 'warning' && darkMode,
        'dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-400/20 dark:focus:bg-gray-600/20 dark:focus:ring-offset-gray-600': color === 'gray' && darkMode,
        'dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-500/20 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800/20': color === 'secondary' && darkMode,
    }
    const mergedClassName = classNames([baseClassNames, outlined ? outlineClassNames : defaultClassNames, className])
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

Button.displayName = 'Button'

export default Button
