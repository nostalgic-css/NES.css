import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOptions from '../_helpers/shared';

export default () => {
  const sharedComponentOptions = {
    'is-dark': 'is-dark',
    'is-primary': 'is-primary',
    ...sharedOptions,
  };

  const iconStyle = select('Badge Display', {
    default: '',
    'is-splited': 'is-splited',
    'is-icon': 'is-icon',
  }, 'is-splited');

  const leftOptions = select('Left Style', {
    ...sharedComponentOptions,
  }, 'is-dark');

  const rightOptions = select('Right Style', {
    ...sharedComponentOptions,
  }, 'is-success');

  const badgeClasses = classNames(
    'nes-badge',
    iconStyle,
  );

  return `
    <a href="#" class="${badgeClasses}">
      <span class="${leftOptions}">npm</span>
      <span class="${rightOptions}">1.0.0</span>
    </a>
  `;
};
