module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        540: "540px",
        780: "780px",
      },
      boxShadow: {
        form: "0 15px 35px 0 rgba(60,66,87,.08), 0 5px 15px 0 rgba(0,0,0,.12)",
        neumorph: "5px 5px 5px #1e1f1f, -5px -5px 5px #464749",
        neumorphInset:
          "5px 5px 5px 0 #1e1f1f inset, -5px -5px 5px 0 #464749 inset",
        neumorphInsetRed:
          "5px 5px 5px 0 #790005 inset, -5px -5px 5px 0 #ff000b inset",
        inputfocus: "0 0 0 2px #F472B6",
      },
      backgroundColor: {
        neumorph: "#323334",
        brass: "#AF7757",
        hoverGrey: "#e6e6e6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
