import { select, boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isDark = boolean('is-dark', false);
  const isRounded = boolean('is-rounded', false);
  const withTitle = boolean('with-title', false);

  const containerAlignment = select('Alignment', {
    default: '',
    'is-centered': 'is-centered',
    'is-right': 'is-right',
  }, '');

  const containerClasses = classNames(
    'nes-container',
    containerAlignment,
    {
      'is-dark': isDark,
      'is-rounded': isRounded,
      'with-title': withTitle,
    },
  );

  return `
    <div class="${containerClasses}">
      ${withTitle ? '<p class="title">Container</p>' : ''}
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
    </div>
  `;
};
