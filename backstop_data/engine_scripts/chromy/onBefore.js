module.exports = function (chromy, scenario, vp) {
  require('./loadCookies')(chromy, scenario);

  // IGNORE ANY CERT WARNINGS
  chromy.ignoreCertificateErrors();
};
