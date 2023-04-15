/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        // './src/pages/**/*.{js,ts,jsx,tsx}',
        // './src/components/**/*.{js,ts,jsx,tsx}',
        // './src/app/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                danger: colors.rose,
                primary: colors.amber,
                success: colors.green,
                warning: colors.amber,
            },
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
            },
            // spacing: {
            //     '8xl': '96rem',
            //     '9xl': '128rem',
            // },
            // borderRadius: {
            //     '4xl': '2rem',
            // }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
