import { radios, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isDark = boolean('is-dark', false);
  const listOptions = radios('List Type', {
    'is-disc': 'is-disc',
    'is-circle': 'is-circle',
  }, 'is-disc');

  const listClasses = classNames(
    'nes-list',
    {
      'is-dark': isDark,
    },
    listOptions,
  );

  return `
    <ul class="${listClasses}">
      <li>Good morning.</li>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  `;
};
