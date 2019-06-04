const { types } = require('node-sass'); /* eslint-disable-line import/no-extraneous-dependencies */

const getBuildData = require('./getBuildData');
const getFileAsDataURI = require('./getFileAsDataURI');

module.exports = {
  'build-data()': () => types.String(getBuildData(true)),
  'get-file-as-data-uri($filepath)': filepath => types.String(getFileAsDataURI(filepath)),
};
