import React from 'react'


type Props = {
    label: string
    onClick: () => void
    type?: 'button' | 'submit' | 'reset'
    value?: string | number 
}

/**
 * TODO: 1. Primary (CTA, Form Submit), Secondary (Reset, Cancel, Close) 
 * TODO: 2. Handle Button Type
 * TODO: 3. 
 */

const Button = ({ label, onClick, type = 'button', value }: Props) => {
    return (<>
        <button
            type={type}
            className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            onClick={onClick}
        >
            {label}
        </button>
    </>)
}

export default Button
