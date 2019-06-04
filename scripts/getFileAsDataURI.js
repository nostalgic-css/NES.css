/* eslint-disable import/no-extraneous-dependencies */
const filetype = require('file-type');
const fs = require('fs');
const path = require('path');
/* eslint-enable */

module.exports = (fileString) => {
  const filepath = path.resolve(__dirname, fileString.getValue());
  const fileBuffer = fs.readFileSync(filepath);

  const fileDataURI = fileBuffer.toString('base64');
  const { mime } = filetype(fileBuffer);

  return `data:${mime};base64,${fileDataURI}`;
};
