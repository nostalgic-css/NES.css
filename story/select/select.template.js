import { boolean, select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const isDark = boolean('is-dark', false);
  const selectOptions = select('class', {
    default: '',
    ...sharedOptions,
  }, '');

  const selectClasses = classNames(
    'nes-select',
    selectOptions,
    {
      'is-dark': isDark,
    },
  );
  return `
    <div class="${selectClasses}">
      <select required>
        <option value="" disabled selected hidden>Select...</option>
        <option value="0">To be</option>
        <option value="1">Not to be</option>
      </select>
    </div>
  `;
};
