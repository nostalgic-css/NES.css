import { select } from '@storybook/addon-knobs';
import classNames from 'classnames';

import { Reactions } from '../_helpers/icons';

export default () => {
  const reactionIcon = select('Reaction Icon', {
    ...Reactions,
  }, 'heart');

  const reactionSize = select('Size Class', {
    'is-small': 'is-small',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, 'is-large');

  const reactionFill = select('Fill Class', {
    default: '',
    'is-half': 'is-half',
    'is-transparent': 'is-transparent',
    'is-empty': 'is-empty',
  });

  const reactionClasses = classNames(
    'nes-icon',
    reactionIcon,
    reactionSize,
    reactionFill,
  );
  return `
    <i class="${reactionClasses}"></i>
  `;
};
