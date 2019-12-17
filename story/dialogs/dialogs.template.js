import { boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isOpen = boolean('Open', true) ? 'open' : '';
  const isRounded = boolean('is-rounded', false);
  const isDark = boolean('is-dark', false);

  const dialogClasses = classNames(
    'nes-dialog',
    {
      'is-rounded': isRounded,
      'is-dark': isDark,
    },
  );

  return `
    <dialog class="${dialogClasses}" ${isOpen}>
      <p class="title">Dialog</p>
      <p>Alert: this is a dialog.</p>
    </dialog>
  `;
};
