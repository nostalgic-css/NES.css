const git = require('git-rev-sync'); /* eslint-disable-line import/no-extraneous-dependencies */
const { types } = require('node-sass'); /* eslint-disable-line import/no-extraneous-dependencies */

module.exports = {
  'version()': () => {
    const packageData = require('../package.json'); /* eslint-disable-line global-require */

    let buildData = `
      NES.css Framework
      Version: ${(git.branch() === 'develop') ? 'development' : `v${packageData.version}`}
    `;

    if (git.branch() !== 'master') {
      buildData += `
        Build Date: ${(new Date()).toISOString()}
        Node Version: ${process.version}
        Branch: ${git.branch()}
        Commit: ${git.long()}`;
    }

    if (process.env.CIRCLECI) {
      buildData += `
        Build Number (CircleCI): ${process.env.CIRCLE_BUILD_NUM}`;
    }

    return types.String(buildData.replace(/\n/, '').replace(/^  +/gm, '  '));
  },
};
