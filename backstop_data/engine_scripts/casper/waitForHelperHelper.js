var TIMEOUT_DEFAULT = 2000;

module.exports = function (casper, timeout) {
  var TIMEOUT = timeout || TIMEOUT_DEFAULT;

  return function waitFor (selector) {
    if (selector) {
      casper.waitForSelector(
        selector,
        function () {},
        function () {
          console.error('NOT FOUND > ' + selector);
        },
        TIMEOUT
      );
    }
  };
};
