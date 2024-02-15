/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#1DBB7D",
        red:"#D84A69", 
        yellow:"#EDC453",
      }
    },
  },
  plugins: [require("daisyui")],
}