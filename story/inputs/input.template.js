import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const inputOptions = select('Input Classes', {
    default: '',
    ...sharedOptions,
  }, '');

  const inputClasses = classNames(
    'nes-input',
    inputOptions,
  );

  return `
    <input type="text" id="name_field" class="${inputClasses}" placeholder="NES.css">
  `;
};
