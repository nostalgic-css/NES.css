module.exports = function (chromy, scenario) {
  var hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
  var clickSelector = scenario.clickSelectors || scenario.clickSelector;
  var scrollToSelector = scenario.scrollToSelectors || scenario.scrollToSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (hoverSelector) {
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result(function (rect) {
        chromy.mouseMoved(rect.left, rect.top);
      });
  }

  if (clickSelector) {
    chromy
      .wait(clickSelector)
      .click(clickSelector);
  }

  if (postInteractionWait) {
    chromy.wait(postInteractionWait);
  }

  if (scrollToSelector) {
    chromy
      .wait(scrollToSelector)
      .evaluate(`window._scrollToSelector = '${scrollToSelector}'`)
      .evaluate(function () {
        document.querySelector(window._scrollToSelector).scrollIntoView();
      });
  }
};
