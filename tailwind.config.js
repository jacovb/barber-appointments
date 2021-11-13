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
        neumorph: "5px 5px 5px 0 #bcbdc0, -5px -5px 5px 0 #ffffff",
        neumorphInset:
          "5px 5px 5px 0 #bcbdc0 inset, -5px -5px 5px 0 #ffffff inset",
        inputfocus: "0 0 0 2px #F472B6",
      },
      backgroundColor: {
        neumorph: "#ebecf0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
