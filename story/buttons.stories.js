import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('button', () => {
  const buttonType = select('type', {
    button: 'button',
    file: 'file',
  }, 'button');
  const extraClass = radios('class', {
    default: '',
    'is-primary': 'is-primary',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
    'is-disabled': 'is-disabled',
  }, '');
  return buttonType === 'file'
    ? `<label class="nes-btn ${extraClass}">
      <span>Select your file</span>
      <input type="file">
    </label>`
    : `<button type="button" class="nes-btn ${extraClass}">Normal</button>`;
});
