import { boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';


export default () => {
  const isDark = boolean('is-dark', false);

  const radioClasses = classNames(
    'nes-radio',
    {
      'is-dark': isDark,
    },
  );

  return `
    <div style="${isDark ? 'background-color: black;' : ''}">
      <label>
        <input type="radio" class="${radioClasses}" name="answer" checked />
        <span>Yes</span>
      </label>
      <label>
        <input type="radio" class="${radioClasses}" name="answer" />
        <span>No</span>
      </label>
    </div>
  `;
};
