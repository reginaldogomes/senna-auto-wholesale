module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                blue: '#06306E',
                yellow: '#FFB627',
                green: '#05773B'
            },
            fontFamily: {
                Rampart: ["Roboto", "sans-serif"],
            }
        },
    },
    plugins: [],
}
