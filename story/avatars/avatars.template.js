import { select, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isRounded = boolean('is-rounded', false);
  const avatarSize = select('Avatar Classes', {
    default: '',
    'is-small': 'is-small',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, '');

  const avatarClasses = classNames(
    'nes-avatar',
    avatarSize,
    {
      'is-rounded': isRounded,
    },
  );

  return `
    <img src="http://www.gravatar.com/avatar?s=15" class="${avatarClasses}"
      alt="Gravatar Image Example"
      style="image-rendering: pixelated;">
  `;
};
