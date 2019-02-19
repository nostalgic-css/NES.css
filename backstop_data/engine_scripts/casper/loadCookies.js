var fs = require('fs');

module.exports = function (casper, scenario) {
  var cookies = [];
  var cookiePath = scenario.cookiePath;

  // READ COOKIES FROM FILE IF EXISTS
  if (fs.existsSync(cookiePath)) {
    cookies = JSON.parse(fs.readFileSync(cookiePath));
  }

  casper.page.cookies = cookies;
  console.log('Cookie state restored with cookies:', JSON.stringify(cookies, null, 2));
  casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36');
};
