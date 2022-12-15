/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cgi-red': "#E11937"
      },
      backgroundImage: {
        'auth': "url('/assets/images/auth-bg.avif')",
      }
    },
  },
  corePlugins: {
    container: false
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [
    require("daisyui"),
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',

          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        }
      });
    }
  ],
};
