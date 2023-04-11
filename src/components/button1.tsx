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
    return (
        <>
            <button
                type={type}
                className={classNames(
                    `text-white`,
                    `bg-${variant}-700`,
                    `hover:bg-${variant}-800`,
                    `dark:bg-${variant}-600`,
                    `dark:hover:bg-${variant}-700`,
                    `dark:focus:ring-${variant}-800`,
                    `focus:ring-${variant}-300`,
                    `focus:ring-4`,
                    `font-medium`,
                    `rounded-lg`,
                    `text-sm`,
                    `px-5`,
                    `py-2.5`,
                    `mr-2`,
                    `mb-2`,
                    `focus:outline-none`
                )}
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
