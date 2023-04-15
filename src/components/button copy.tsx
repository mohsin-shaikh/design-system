import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'gray';
    type?: 'button' | 'submit' | 'reset';
    value?: string | number;
    disabled?: boolean;
    outlined?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode;
    iconPosition?: 'before' | 'after';
    darkMode?: boolean;
};

/**
 * TODO: 1. Primary (CTA, Form Submit), Secondary (Reset, Cancel, Close)
 * TODO: 2. Handle Button Type
 * TODO: 3.
 */
const Button = ({
    children,
    onClick,
    type = 'button',
    value,
    color = 'primary',
    disabled = false,
    outlined=false,
    size = 'md',
    icon,
    iconPosition,
    darkMode = false,
}: ButtonProps) => {
    const cn = {
        // Common
        'zuupee-button zuupee-button-size-{$size} inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset': true,
        'dark:focus:ring-offset-0': darkMode,
        'opacity-70 cursor-not-allowed pointer-events-none': disabled,
        'min-h-[2.25rem] px-4 text-sm': size === 'md',
        'min-h-[2rem] px-3 text-sm': size === 'sm',
        'min-h-[2.75rem] px-6 text-lg': size === 'lg',
        // Default
        'text-white shadow focus:ring-white border-transparent': color !== 'secondary',
        'bg-primary-600 hover:bg-primary-500 focus:bg-primary-700 focus:ring-offset-primary-700': color === 'primary',
        'bg-success-600 hover:bg-success-500 focus:bg-success-700 focus:ring-offset-success-700': color === 'success',
        'bg-danger-600 hover:bg-danger-500 focus:bg-danger-700 focus:ring-offset-danger-700': color === 'danger',
        'bg-warning-600 hover:bg-warning-500 focus:bg-warning-700 focus:ring-offset-warning-700': color === 'warning',
        'bg-gray-600 hover:bg-gray-500 focus:bg-gray-700 focus:ring-offset-gray-700': color === 'gray',
        'text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600': color === 'secondary',
        'dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800': color === 'secondary' && darkMode,
        // Outlined
    }
    const className = classNames({
        // Base
        'font-medium rounded px-3 py-2': true,
        // Color
        'text-white dark:text-black': true,
        // Background
        'bg-primary-700 dark:bg-primary-600': color === 'primary',
        'bg-secondary-700 dark:bg-secondary-600': color === 'secondary',
        // Hover
        'hover:bg-primary-800 dark:hover:bg-primary-700': color === 'primary' && !disabled,
        'hover:bg-secondary-800 dark:hover:bg-secondary-700': color === 'secondary' && !disabled,
        // Size
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        // Disabled
        'cursor-not-allowed opacity-60': disabled,
        })

    console.log({
        'btn': true,
        true ? {'demo': 1} : {'dem1': 2}
    })
    return (<>
        <button
            type={type}
            className={className}
            onClick={onClick}
            value={value}
            disabled={disabled}
        >
            {children}
        </button>
    </>);
};

export default Button;
