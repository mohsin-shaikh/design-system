import React from "react";
import classNames from "classnames";

type Props = {
    label: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    value?: string | number;
    variant?: "primary" | "secondary";
    disabled?: boolean;
};

/**
 * TODO: 1. Primary (CTA, Form Submit), Secondary (Reset, Cancel, Close)
 * TODO: 2. Handle Button Type
 * TODO: 3.
 */

const Button1 = ({
    label,
    onClick,
    type = "button",
    value,
    variant = "primary",
    disabled = false
}: Props) => {
    const className = classNames(
        `text-white`,
        variant == 'primary' ? 'bg-primary-700' : 'bg-secondary-700',
        variant == 'primary' ? 'hover:bg-primary-800' : 'hover:bg-secondary-800',
        variant == 'primary' ? 'dark:bg-primary-600' : 'dark:bg-secondary-600',
        variant == 'primary' ? 'dark:hover:bg-primary-700' : 'dark:hover:bg-secondary-700',
        variant == 'primary' ? 'dark:focus:ring-primary-800' : 'dark:focus:ring-secondary-800',
        variant == 'primary' ? 'focus:ring-primary-300' : 'focus:ring-secondary-300',
        `focus:ring-4`,
        `font-medium`,
        `rounded-lg`,
        `text-sm`,
        `px-5`,
        `py-2.5`,
        `mr-2`,
        `mb-2`,
        `focus:outline-none`
    )
    return (
        <>
            <button
                type={type}
                className={className}
                onClick={onClick}
                value={value}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    );
};

export default Button1;
