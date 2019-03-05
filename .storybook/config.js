/* eslint-disable import/no-extraneous-dependencies */
import {
  addParameters,
  configure,
} from '@storybook/html';
/* eslint-enable */

import '../scss/nes.scss'; // eslint-disable-line import/no-unresolved

// automatically import all files ending in *.stories.js
const req = require.context('../story', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const options = [
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Orange', value: 'orange' },
  { name: 'Red', value: 'red' },
  { name: 'Purple', value: 'purple' },
  { name: 'Black', value: 'black' },
  { name: 'White', value: 'white', default: true },
];

addParameters({ backgrounds: options });

configure(loadStories, module);
