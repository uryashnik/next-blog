/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#090909',
                coverBrand: '#EEEEEE',
                coverDark: '#1E1E1E',
                contentDark: '#181818',
                orange: '#FCB42F',
                dividerDark: '#242424',
                btnBgDark: '#292929',
            },
            keyframes: {
                cursor: {
                    '50%': {color: 'transparent'},
                },
            },
            animation: {
                cursor: 'cursor 1s infinite step-end',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
    plugins: [require('@tailwindcss/line-clamp')],
};
