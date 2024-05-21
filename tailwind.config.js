/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    extend: {
        boxShadow: {
            "3xl": "0 26px 58px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18)",
        },
        height: {
            96: "534px",
        },
        width: {
            96: "438px",
        },
    },
    colors: {
        White: "#ffffff",
        white1: "#fafafa",
        white2: "#f4f4f4",
        white3: "#f1f1f1",
        white4: "#fdfdfd",
        white5: "#f1f5f9",
        black1: "#2f2f2f",
        black2: "#262626",
        blueb2: "#02274f",
        amarelob2: "#fdcf00",
    },
    fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
    },
};
export const plugins = [require("@tailwindcss/forms")];
