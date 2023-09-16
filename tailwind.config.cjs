const corePlugins = require('./theme/config/corePlugins');
const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      body: {
        margin: '0.25rem',
      },
      colors: {
        current: 'currentColor',
        white: '#FFEFCF',
        black: '#140C10',
        orange: '#E2703A',
        tan: '#EEB76B',
        primary: 'var(--colorPrimary)',
        secondary: 'var(--colorSecondary)',
        highlight: 'var(--colorHighlight)',
      },
      fontFamily: {
        sans: ['ATC Overlook', ...defaultTheme.fontFamily.sans],
        display: ['Macabre', ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: 'var(--colorPrimary)',
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-links': 'inherit',
            '--tw-prose-bullets': theme('colors.highlight'),
          },
        },
      }),
    },
  },
  corePlugins,
  plugins: [typography],
};
