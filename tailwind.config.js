/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Roboto Slab", "serif"],
            serif: ["Roboto", "sans-serif"],
        },
        extend: {
            colors: {
                custom: {
                    gray: {
                        100: "#EDEDED",
                        200: "#DADADA",
                        400: "#B9B9B9",
                        900: "#324950",
                    },
                    main: "#F7F7F7",
                    green: "#57984C",
                    blue: "#2D3F45",
                    brown: "#735440",
                    rose: "#FCF0F0",
                    red: {
                        100: '#FFFAFA',
                        700: "#EB5757",
                        800: "#CF2333",
                    },
                },
            },
            dropShadow: {
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.25)",
                    "0 45px 65px rgba(0, 0, 0, 0.15)",
                ],
            },
            container: {
                screens: {
                    xl: "1100px",
                },
            },
        },
    },
    plugins: [],
}

