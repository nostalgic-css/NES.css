const git = require('git-rev-sync'); /* eslint-disable-line import/no-extraneous-dependencies */

module.exports = (isCompiled = false) => {
  let buildData = '';

  if (git.branch() !== 'master') {
    if (isCompiled) {
      buildData += `
        Build Date: ${(new Date()).toISOString()}
        Node Version: ${process.version}`;
    }

    buildData += `
      Branch: ${git.branch()}
      Commit: ${git.long()}`;

    if (process.env.CIRCLECI) {
      buildData += `
        Build Number (CircleCI): ${process.env.CIRCLE_BUILD_NUM}`;
    }
  }

  return buildData.replace(/^  +/gm, '  ');
};
