/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#919191",
          "200": "#787777",
          "300": "rgba(43, 42, 42, 0.62)",
          "400": "rgba(0, 0, 0, 0.62)",
        },
        honeydew: {
          "100": "#cfffda",
          "200": "rgba(230, 247, 234, 0.06)",
        },
        darkseagreen: "#b5e6bf",
        aquamarine: "#adfabe",
        mediumaquamarine: "#94e0a6",
        palegreen: "rgba(113, 247, 143, 0.58)",
      },
      spacing: {},
      fontFamily: {
        "gothic-a1": "'Gothic A1'",
        "darumadrop-one": "'Darumadrop One'",
      },
      borderRadius: {
        "29xl": "48px",
        xl: "20px",
        "14xl": "33px",
        "46xl": "65px",
        "9xl": "28px",
        sm: "14px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      "2xl": "21px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "28xl": "47px",
      "19xl": "38px",
      "6xl": "25px",
      "20xl": "39px",
      "12xl": "31px",
      "4xl": "23px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "11xl": "30px",
      lg: "18px",
      "33xl": "52px",
      "23xl": "42px",
      "31xl": "50px",
      "46xl": "65px",
      "15xl": "34px",
      "8xl": "27px",
      "29xl": "48px",
      "10xl": "29px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
