const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        450: "450px",
      },
      spacing: {
        540: "540px",
        780: "780px",
      },
      textColor: {
        disabled: "#505050",
      },
      boxShadow: {
        form: "0 15px 35px 0 rgba(60,66,87,.08), 0 5px 15px 0 rgba(0,0,0,.12)",
        neumorph: "5px 5px 5px #1e1f1f, -5px -5px 5px #464749",
        neumorphInset:
          "5px 5px 5px 0 #1e1f1f inset, -5px -5px 5px 0 #464749 inset",
        neumorphInsetRed:
          "5px 5px 5px 0 #790005 inset, -5px -5px 5px 0 #ff000b inset",
        inputfocus: "0 0 0 2px #F472B6",
        float: "5px 5px 5px #1e1f1f",
      },
      backgroundColor: {
        neumorph: "#323334",
        brass: "#AF7757",
        hoverGrey: "#e6e6e6",
        nav: "#1b1c1c",
      },
      backgroundImage: {
        london: "url('../images/WestLondonDark.jpeg')",
      },
      fontFamily: {
        AbrilFatface: ["Abril Fatface"],
        Raleway: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
