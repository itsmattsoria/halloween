const corePlugins = require('./theme/config/corePlugins');
const spacing = require('./theme/spacing');
const typography = require('@tailwindcss/typography');
const containerQueries = require('@tailwindcss/container-queries');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      spacing,
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
        sans: 'ATC Overlook, sans-serif',
        display: 'Macabre, serif',
      },
      fontSize: {
        xs: 'var(--step--1)',
        sm: 'var(--step-0)',
        base: 'var(--step-1)',
        lg: [
          'var(--step-2)',
          {
            fontWeight: 'bold',
          },
        ],
        xl: [
          'var(--step-3)',
          {
            fontWeight: 'bold',
          },
        ],
        '2xl': [
          'var(--step-4)',
          {
            fontWeight: 'bold',
          },
        ],
        '3xl': [
          'var(--step-5)',
          {
            fontWeight: 'bold',
          },
        ],
        '4xl': [
          'var(--step-6)',
          {
            fontWeight: 'bold',
          },
        ],
      },
      borderRadius: {
        DEFAULT: '0.35rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: 'var(--colorPrimary)',
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-links': 'inherit',
            '--tw-prose-bullets': theme('colors.highlight'),
            h1: {
              fontFamily: theme('fontFamily.display'),
              fontSize: 'var(--step-6)',
            },
            h2: {
              fontFamily: theme('fontFamily.display'),
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.05em',
              color: theme('colors.highlight'),
              fontSize: 'var(--step-6)',
            },
            p: {
              fontSize: 'var(--step-2)',
            },
            li: {
              fontSize: 'var(--step-2)',
            },
            '> ul > li > *:first-child': {
              marginTop: '0',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0',
            },
          },
        },
      }),
    },
  },
  corePlugins,
  plugins: [typography, containerQueries],
};
