import { radios, select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import { Icons, Size } from '../_helpers/icons';

export default () => {
  const selectedIcon = select('class', {
    ...Icons,
  }, 'twitter');

  const iconSize = radios('Icon Size', {
    ...Size,
  }, '');

  const iconClasses = classNames(
    'nes-icon',
    selectedIcon,
    iconSize,
  );
  return `
    <i class="${iconClasses}"></i>
  `;
};
