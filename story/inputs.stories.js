import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);

stories.add('input.radio', () => {
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';

  return (
    `<label>
      <input type="radio" class="nes-radio ${isDark}" name="answer" checked />
      <span>Yes</span>
    </label>
    <label>
      <input type="radio" class="nes-radio ${isDark}" name="answer" />
      <span>No</span>
    </label>`
  );
})
  .add('input.checkbox', () => {
    const isDark = boolean('is-dark', false) ? 'is-dark' : '';

    return (
      `<label>
        <input type="checkbox" class="nes-checkbox ${isDark}" checked />
        <span>Enable</span>
      </label>`
    );
  })
  .add('input', () => {
    const selectedClass = radios('class', {
      default: '',
      'is-success': 'is-success',
      'is-warning': 'is-warning',
      'is-error': 'is-error',
      'is-dark': 'is-dark',
    }, '');

    return `<input type="text" id="name_field" class="nes-input ${selectedClass}" placeholder="NES.css">`;
  });
