import { select, boolean, number } from '@storybook/addon-knobs';
import classNames from 'classnames';

import sharedOption from '../_helpers/shared';

export default () => {
  const isRounded = boolean('is-rounded', false);
  const progressTypes = select('Progress Style', {
    default: '',
    'is-dark': 'is-dark',
    ...sharedOption,
  }, '');

  const percentage = number('Percentage', 30, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });

  const progessClasses = classNames(
    'nes-progress',
    progressTypes,
    {
      'is-rounded': isRounded,
    },
  );

  return `
    <progress class="nes-progress ${progessClasses}" value="${percentage}" max="100" style="width: 100%;"></progress>
  `;
};
