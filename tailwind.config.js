/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#243823',
        green: {

              50:'#84BA3F1F',
             100:'#84BA3F',
             200:'#0E6936',
             300:'#0E6836',
             400:'#003D06',
             500:'#F0F6E8',
             600:'#F1F7EA4F',
             700:'#3DA948'



        },
        black:{
           100:'#666666',
           200:'#000000',
           300:'#383838',
           400:'#000000CC',
           500:'#000000B2'

        },
        ash:{
          100:'#949494',
          200:'#D9D9D9',
          300:'#B7B7B7',
          400:'#D1D1D1',
          500:'#666666',
          600:'#7070701A',
          700:'#F6F6F6',
          
          
        }

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
    },
    corePlugins: {
      // ...
      ringColor: false,
      ringOffsetColor: false,
      ringOffsetWidth: false,
      boxShadow: false,
      borderColor: false,
    }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin')
  ]
}
