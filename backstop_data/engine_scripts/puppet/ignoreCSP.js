/**
 * IGNORE CSP HEADERS
 * Listen to all requests. If a request matches scenario.url
 * then fetch the request again manually, strip out CSP headers
 * and respond to the original request without CSP headers.
 * Allows `ignoreHTTPSErrors: true` BUT... requires `debugWindow: true`
 *
 * see https://github.com/GoogleChrome/puppeteer/issues/1229#issuecomment-380133332
 * this is the workaround until Page.setBypassCSP lands... https://github.com/GoogleChrome/puppeteer/pull/2324
 *
 * @param      {REQUEST}  request
 * @return     {VOID}
 *
 * Use this in an onBefore script E.G.
  ```
  module.exports = async function(page, scenario) {
    require('./removeCSP')(page, scenario);
  }
  ```
 *
 */

const fetch = require('node-fetch');
const https = require('https');
const agent = new https.Agent({
  rejectUnauthorized: false
});

module.exports = async function (page, scenario) {
  const intercept = async (request, targetUrl) => {
    const requestUrl = request.url();

    // FIND TARGET URL REQUEST
    if (requestUrl === targetUrl) {
      const cookiesList = await page.cookies(requestUrl);
      const cookies = cookiesList.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
      const headers = Object.assign(request.headers(), { cookie: cookies });
      const options = {
        headers: headers,
        body: request.postData(),
        method: request.method(),
        follow: 20,
        agent
      };

      const result = await fetch(requestUrl, options);

      const buffer = await result.buffer();
      let cleanedHeaders = result.headers._headers || {};
      cleanedHeaders['content-security-policy'] = '';
      await request.respond({
        body: buffer,
        headers: cleanedHeaders,
        status: result.status
      });
    } else {
      request.continue();
    }
  };

  await page.setRequestInterception(true);
  page.on('request', req => {
    intercept(req, scenario.url);
  });
};
