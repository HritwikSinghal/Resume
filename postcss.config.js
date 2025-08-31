/* eslint-env node */
// https://nextjs.org/docs/pages/guides/post-css

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    // 'postcss-preset-env': {
    //   // features: {'nesting-rules': false},
    // },

    //https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  },
};
