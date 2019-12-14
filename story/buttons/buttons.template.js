import { select } from '@storybook/addon-knobs';

import sharedOption from '../_helpers/shared';

export default () => {
  const buttonType = select('Button Type', {
    button: 'button',
    file: 'file',
  }, 'button');

  const buttonClasses = select('Button Classes', {
    default: '',
    'is-primary': 'is-primary',
    ...sharedOption,
    'is-disabled': 'is-disabled',
  }, '');

  return buttonType === 'button' ? `
    <button type="button" class="nes-btn ${buttonClasses}">Normal</button>
  ` : `
    <label class="nes-btn ${buttonClasses}">
      <span>Select your file</span>
      <input type="file">
    </label>
  `;
};
