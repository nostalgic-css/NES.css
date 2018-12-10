import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('button', () => {
  const extraClass = radios('class', {
    default: '',
    'is-primary': 'is-primary',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
    'is-disabled': 'is-disabled',
  }, '');
  return `<button type="button" class="nes-btn ${extraClass}">Normal</button>`;
});
