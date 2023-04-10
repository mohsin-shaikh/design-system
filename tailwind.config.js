/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

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
        colors: {
            transparent: 'transparent',
            primary: colors.indigo,
            secondary: colors.yellow,
            neutral: colors.gray,
            // primary: {
            //     "50": "#eff6ff",
            //     "100": "#dbeafe",
            //     "200": "#bfdbfe",
            //     "300": "#93c5fd",
            //     "400": "#60a5fa",
            //     "500": "#3b82f6",
            //     "600": "#2563eb",
            //     "700": "#1d4ed8",
            //     "800": "#1e40af",
            //     "900": "#1e3a8a"
            // },
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        // extend: {
        //     spacing: {
        //         '8xl': '96rem',
        //         '9xl': '128rem',
        //     },
        //     borderRadius: {
        //         '4xl': '2rem',
        //     }
        // }
    },
    plugins: [],
}
