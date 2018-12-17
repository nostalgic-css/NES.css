const { types } = require('node-sass'); /* eslint-disable-line import/no-extraneous-dependencies */

const getBuildData = require('./getBuildData');

module.exports = {
  'build-data()': () => types.String(getBuildData(true)),
};
