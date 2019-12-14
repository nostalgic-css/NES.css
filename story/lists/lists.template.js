import { radios } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const listOptions = radios('List Type', {
    'is-disc': 'is-disc',
    'is-circle': 'is-circle',
  }, 'is-disc');

  const listClasses = classNames(
    'nes-list',
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
