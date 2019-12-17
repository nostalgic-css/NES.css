import { select } from '@storybook/addon-knobs';

import sharedOptions from '../_helpers/shared';

export default () => {
  const selectedClass = select('class', {
    default: '',
    ...sharedOptions,
    'is-dark': 'is-dark',
  }, '');

  return `
    <div class="nes-select ${selectedClass}">
      <select required>
        <option value="" disabled selected hidden>Select...</option>
        <option value="0">To be</option>
        <option value="1">Not to be</option>
      </select>
    </div>
  `;
};
