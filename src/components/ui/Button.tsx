import { VariantProps, cva } from 'class-variance-authority'

import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink'

const buttonStyles = cva(
    'inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset',
    {
        variants: {
            variant: {
                solid: 'bg-primary-500 text-white hover:bg-primary-600',
                outline: 'text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white',
                ghost: 'text-primary-500 border-none hover:bg-primary-100',
                soft: 'bg-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white',
                link: 'text-primary-500 bg-none border-none',
            },
            size: {
                sm: 'min-h-[2rem] px-3 text-sm',
                md: 'min-h-[2.25rem] px-4 text-md',
                lg: 'min-h-[2.75rem] px-6 text-lg',
            },
            fullWidth: {
                true: 'w-full',
            },
        },
        defaultVariants: {
            variant: 'solid',
            size: 'md',
        },
    }
)

export interface ButtonProps
    extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> { }

export function Button({ variant, fullWidth, ...props }: ButtonProps) {
    return (
        <ButtonOrLink className={buttonStyles({ variant, fullWidth })} {...props} />
    )
}
