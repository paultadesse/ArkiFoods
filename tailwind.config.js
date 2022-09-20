/** @type {import('tailwindcss').Config} */
const defautTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            xs: "540px",
            ...defautTheme.screens,
        },
        extend: {
            spacing: {
                full: "100%",
            },
        },
    },
    plugins: [],
};
