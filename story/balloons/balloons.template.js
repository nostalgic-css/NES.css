import { select, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isDark = boolean('is-dark', false);
  const balloonDirection = select('Direction', {
    default: '',
    'from-left': 'from-left',
    'from-right': 'from-right',
  }, '');

  const balloonClasses = classNames(
    'nes-balloon',
    balloonDirection,
    {
      'is-dark': isDark,
    },
  );

  return `
    <div class="${balloonClasses}">
      <p>Hello NES.css</p>
    </div>
  `;
};
