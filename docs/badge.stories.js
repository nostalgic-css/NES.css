import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Badges', module);
stories.addDecorator(withKnobs);

stories.add('badges', () => {
  const options = radios('class', {
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

  const selectedClasses = [options, sizes].join(' ');

  return `<span class="nes-badge ${selectedClasses}">
              <span>npm</span>
              <span>1.0.0</span>
          </span>`;
});
