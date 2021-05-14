import { boolean, select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const isDark = boolean('is-dark', false);
  const disabled = 'is-disabled';
  const selectOptions = select('class', {
    default: '',
    ...sharedOptions,
    [disabled]: disabled,
  }, '');

  const selectedClasses = classNames(
    'nes-select',
    selectOptions,
    { 'is-dark': isDark },
  );

  return `
    <div class="${selectedClasses}">
      <select required ${selectOptions.includes(disabled) && 'disabled'} >
        <option value="" disabled selected hidden>Select...</option>
        <option value="0">To be</option>
        <option value="1">Not to be</option>
      </select>
    </div>
  `;
};
