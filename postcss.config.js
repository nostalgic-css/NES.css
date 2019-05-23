const functions = require('./scripts/scssFunctions.js');

module.exports = ({ env }) => {
  const isDev = (env === 'development');

  return {
    map: isDev ? false : {
      annotation: true,
      inline: true,
      sourcesContent: true,
    },
    plugins: {
      'postcss-browser-reporter': isDev ? {} : false,
      'postcss-node-sass': { functions },
      'postcss-preset-env': {},
      'postcss-clean': isDev ? false : {},
    },
  };
};
