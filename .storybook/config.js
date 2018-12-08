import { configure } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies

import '../css/nes.css'; // eslint-disable-line import/no-unresolved

// automatically import all files ending in *.stories.js
const req = require.context('../docs', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
