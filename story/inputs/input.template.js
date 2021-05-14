import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const disabled = 'is-disabled';
  const inputOptions = select('Input Classes', {
    default: '',
    ...sharedOptions,
    [disabled]: disabled,
  }, '');

  const inputClasses = classNames(
    'nes-input',
    inputOptions,
  );

  return `
    <input 
      type="text" 
      id="name_field" 
      ${inputOptions.includes(disabled) && 'disabled'}  
      class="${inputClasses}" 
      placeholder="NES.css"
    />
  `;
};
