/**
 * INTERCEPT IMAGES
 * Listen to all requests. If a request matches IMAGE_URL_RE
 * then stub the image with data from IMAGE_STUB_URL
 *
 * Use this in an onBefore script E.G.
  ```
  module.exports = async function(page, scenario) {
    require('./interceptImages')(page, scenario);
  }
  ```
 *
 */

const fs = require('fs');
const path = require('path');

const IMAGE_URL_RE = /\.gif|\.jpg|\.png/i;
const IMAGE_STUB_URL = path.resolve(__dirname, '../../imageStub.jpg');
const IMAGE_DATA_BUFFER = fs.readFileSync(IMAGE_STUB_URL);
const HEADERS_STUB = {};

module.exports = async function (page, scenario) {
  const intercept = async (request, targetUrl) => {
    if (IMAGE_URL_RE.test(request.url())) {
      await request.respond({
        body: IMAGE_DATA_BUFFER,
        headers: HEADERS_STUB,
        status: 200
      });
    } else {
      request.continue();
    }
  };
  await page.setRequestInterception(true);
  page.on('request', intercept);
};
