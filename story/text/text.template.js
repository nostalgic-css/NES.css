import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const textOptions = select('Radio Classes', {
    default: '',
    'is-primary': 'is-primary',
    ...sharedOptions,
    'is-disabled': 'is-disabled',
  }, '');

  const textClasses = classNames(
    'nes-text',
    textOptions,
  );

  return `
    <span class="nes-text ${textClasses}">NES.css</span>
  `;
};
