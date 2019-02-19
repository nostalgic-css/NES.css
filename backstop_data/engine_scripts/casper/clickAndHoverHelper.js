var WAIT_TIMEOUT = 5000;

module.exports = function (casper, scenario) {
  var waitFor = require('./waitForHelperHelper')(casper, WAIT_TIMEOUT);
  var hoverSelector = scenario.hoverSelector;
  var clickSelector = scenario.clickSelector;
  var postInteractionWait = scenario.postInteractionWait;

  if (hoverSelector) {
    waitFor(hoverSelector);
    casper.then(function () {
      casper.mouse.move(hoverSelector);
    });
  }

  if (clickSelector) {
    waitFor(clickSelector);
    casper.then(function () {
      casper.click(clickSelector);
    });
  }

  // TODO: if postInteractionWait === integer then do ==> wait(postInteractionWait) || elsevvv
  waitFor(postInteractionWait);
};
