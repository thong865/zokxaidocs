/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // themes: [
    //   {
    //     light: {
    //       ...require("daisyui/src/theming/themes")["light"],
    //       primary: "#00838F"
    //     },
    //   },
    // ],
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

