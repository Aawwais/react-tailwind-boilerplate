// /** @type {import('tailwindcss').Config} */
// export default {
//   // content: [],
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xxl: "2560px",
                xl: "1920px",
                xss: "500px",
                xsss: "460px",
                xssss: "350px",
                md: "650px",
                // lg: "768px",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: "#1030ff",
                secondary: "#272727",
            },
            width: {
                inherit: "inherit",
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
};
