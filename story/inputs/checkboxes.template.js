import { boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isDark = boolean('is-dark', false);
  const isDisabled = boolean('is-disabled', false);

  const checkBoxClasses = classNames(
    'nes-checkbox',
    {
      'is-dark': isDark,
    },
    {
      'is-disabled': isDisabled,
    },
  );

  return `
    <div style="${isDark ? 'background-color: black;' : ''}">
      <label>
        <input type="checkbox" ${isDisabled && 'disabled'} class="${checkBoxClasses}" checked />
        <span>Enable</span>
      </label>
    </div>
  `;
};
