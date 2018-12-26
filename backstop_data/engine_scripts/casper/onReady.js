module.exports = function (casper, scenario, vp) {
  console.log('SCENARIO> ' + scenario.label);
  require('./clickAndHoverHelper')(casper, scenario);
  // add more helpers here...
};
