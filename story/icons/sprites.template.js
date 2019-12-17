import { select } from '@storybook/addon-knobs';

import { Sprites } from '../_helpers/icons';

export default () => {
  const selectedSprite = select('class', {
    ...Sprites,
  }, 'nes-pokeball');

  return `
    <i class="${selectedSprite}"></i>
  `;
};
