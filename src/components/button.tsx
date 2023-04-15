import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    value?: string | number;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
    variant = 'primary',
    disabled = false,
    size = 'md'
}: ButtonProps) => {
    const className = classNames({
        // Base
        'font-medium rounded px-3 py-2': true,
        // Color
        'text-white dark:text-black': true,
        // Background
        'bg-primary-700 dark:bg-primary-600': variant === 'primary',
        'bg-secondary-700 dark:bg-secondary-600': variant === 'secondary',
        // Hover
        'hover:bg-primary-800 dark:hover:bg-primary-700': variant === 'primary' && !disabled,
        'hover:bg-secondary-800 dark:hover:bg-secondary-700': variant === 'secondary' && !disabled,
        // Size
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
        // Disabled
        'cursor-not-allowed opacity-60': disabled,
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
