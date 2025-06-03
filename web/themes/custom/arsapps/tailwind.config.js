import { addDynamicIconSelectors } from '@iconify/tailwind'
import tailwindForms from '@tailwindcss/forms'
import tailwindTypography from '@tailwindcss/typography'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindContainerQueries from '@tailwindcss/container-queries'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './templates/**/*.html.twig',
    '../../modules/custom/**/*.twig',
    '../../../modules/custom/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      'source-sans': ['"Source Sans 3 Variable"', 'sans-serif'],
      // Add other USWDS fonts as needed
    },
    extend: {
      // You can extract the extended colors/screens config from your config source above.
    },
  },
  plugins: [
    tailwindForms({ strategy: 'class' }),
    tailwindTypography(),
    tailwindAnimate,
    tailwindContainerQueries,
    addDynamicIconSelectors({ scale: 0 }),
    plugin(({ addVariant }) => {
      addVariant('forced-colors', '@media (forced-colors: active)')
    }),
  ],
}
