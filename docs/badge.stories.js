import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios, boolean, number,
} from '@storybook/addon-knobs';

const stories = storiesOf('Badges', module);
stories.addDecorator(withKnobs);

stories.add('badges', () => {
  const optionsLeft = radios('left/only', {
    'is-dark': 'is-dark',
    'is-success': 'is-success',
    'is-primary': 'is-primary',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
  }, 'is-dark');

  const optionsRight = radios('right', {
    'is-dark': 'is-dark',
    'is-success': 'is-success',
    'is-primary': 'is-primary',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
  }, 'is-success');

  const fontSize = number('font-size', 1, {
    range: true,
    min: 0,
    max: 100,
    step: 0.01,
  });

  const isSplited = boolean('is-splited', true) ? 'is-splited' : '';

  return `<a href="#" class="nes-badge ${isSplited}" style="font-size:${fontSize}em">
              <span class="${optionsLeft}">npm</span>
              <span class="${optionsRight}">1.0.0</span>
          </a>`;
});
