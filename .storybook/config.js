import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
const req = require.context('../docs', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
