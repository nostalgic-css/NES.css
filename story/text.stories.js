import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Texts', module);
stories.addDecorator(withKnobs);

stories.add('text', () => {
  const extraClass = radios('class', {
    default: '',
    'is-primary': 'is-primary',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
    'is-disabled': 'is-disabled',
  }, '');
  return `<span class="nes-text ${extraClass}">NES.css</span>`;
});
