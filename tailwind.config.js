const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}
module.exports = {
  darkMode: ['selector'],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      container: {
          center: true,

        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
           xl: "5rem",
          '2xl': '6rem',
        },
      //   screens: {
      //   sm: '600px',
      //   md: '728px',
      //   lg: '984px',
      //   xl: '1240px',
      //   '2xl': '1496px',
      // },
      },
    },
    fontFamily: {
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: customColors("--c-primary-50"),
          100: customColors("--c-primary-100"),
          200: customColors("--c-primary-200"),
          300: customColors("--c-primary-300"),
          400: customColors("--c-primary-400"),
          500: customColors("--c-primary-500"),
          6000: customColors("--c-primary-600"),
          700: customColors("--c-primary-700"),
          800: customColors("--c-primary-800"),
          900: customColors("--c-primary-900"),
        },
        secondary: {
          50: customColors("--c-secondary-50"),
          100: customColors("--c-secondary-100"),
          200: customColors("--c-secondary-200"),
          300: customColors("--c-secondary-300"),
          400: customColors("--c-secondary-400"),
          500: customColors("--c-secondary-500"),
          6000: customColors("--c-secondary-600"),
          700: customColors("--c-secondary-700"),
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
       
      },
    },
  
  },
  plugins: [
   
  ],
};
