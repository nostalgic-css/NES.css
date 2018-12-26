var fs = require('fs');

module.exports = function (chromy, scenario) {
  var cookies = [];
  var cookiePath = scenario.cookiePath;

  // READ COOKIES FROM FILE IF EXISTS
  if (fs.existsSync(cookiePath)) {
    cookies = JSON.parse(fs.readFileSync(cookiePath));
  }

  // MUNGE COOKIE DOMAIN FOR CHROMY USAGE
  cookies = cookies.map(cookie => {
    cookie.url = 'https://' + cookie.domain;
    delete cookie.domain;
    return cookie;
  });

  // SET COOKIES VIA CHROMY
  chromy.setCookie(cookies);
  console.log('Cookie state restored with:', JSON.stringify(cookies, null, 2));
};
