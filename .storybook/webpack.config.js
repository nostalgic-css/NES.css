const path = require('path');
const scssFunctions = require('../scripts/scssFunctions');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              functions: scssFunctions,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
      },
    ],
  },
};
