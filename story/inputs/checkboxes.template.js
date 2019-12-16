import { boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isDark = boolean('is-dark', false);

  const checkBoxClasses = classNames(
    'nes-checkbox',
    {
      'is-dark': isDark,
    },
  );

  return `
    <div style="${isDark ? 'background-color: black;' : ''}">
      <label>
        <input type="checkbox" class="${checkBoxClasses}" checked />
        <span>Enable</span>
      </label>
    </div>
  `;
};
