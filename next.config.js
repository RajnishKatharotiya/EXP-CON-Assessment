// next.config.js
const withSass = require('@zeit/next-sass');
require('dotenv').config();

// Define all environment variables
const environmentVars = Object.keys(process.env).reduce((acc, curr) => {
  if (process.env.NODE_ENV === 'development' && curr.includes('NEXT_DEV_')) {
    acc[`${curr.replace('NEXT_DEV_', '')}`] = process.env[curr];
  } else if (process.env.NODE_ENV === 'production' && curr.includes('NEXT_PROD_')) {
    acc[`${curr.replace('NEXT_PROD_', '')}`] = process.env[curr];
  }
  return acc;
}, {});

// Global variables and mixins for app.
const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      './scss/mixins.scss',
      './scss/variables.scss',
      './scss/fonts.scss',
      './scss/global.scss',
    ],
  },
};

// Eslint parser
const linterLoader = {
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /(node_modules)/,
  options: {
    // eslint-disable-next-line global-require
    formatter: require('eslint-friendly-formatter'),
  },
};

// Webpack configuration
const webpackConfig = (config) => {
  config.module.rules.forEach((rule) => {
    // search for the sass loader
    if (String(rule.test) === String(/\.scss$/)) {
      // append the sass-resources-loader
      rule.use.push(resourcesLoader);
    }

    // search for the js/jsx loader
    if (String(rule.test) === String(/\.(jsx|js)$/)) {
      rule.use.push(linterLoader);
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      'babel-loader',
      {
        loader: '@svgr/webpack',
        options: {
          babel: false,
        },
      },
      {
        loader: 'url-loader',
        options: {
          limit: 2048,
        },
      },
    ],
  });

  return config;
};

const StyleOptions = withSass({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
  },
  webpack: webpackConfig,
});

module.exports = {
  ...StyleOptions,
  env: environmentVars,
};
