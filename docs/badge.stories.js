import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Badges', module);
stories.addDecorator(withKnobs);

stories.add('badges', () => {
  const optionsLeft = radios('class-left', {
    'is-dark': 'is-dark',
    'is-success': 'is-success',
    'is-primary': 'is-primary',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
  }, '');

  const optionsRight = radios('class-right', {
    'is-dark': 'is-dark',
    'is-success': 'is-success',
    'is-primary': 'is-primary',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
  }, '');

  const sizes = radios('size', {
    'is-small': 'is-small',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, '');

  return `<span class="nes-badge ${sizes}">
              <span class="${optionsLeft}">npm</span>
              <span class="${optionsRight}">1.0.0</span>
          </span>`;
});
