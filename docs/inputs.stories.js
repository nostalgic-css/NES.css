import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);

stories.add('input.radio', () => `
      <label>
        <input type="radio" class="nes-radio" name="answer" checked />
        <span>Yes</span>
      </label> <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span>No</span>
      </label>`)
  .add('input.checkbox', () => `
      <label>
        <input type="checkbox" class="nes-checkbox" checked />
        <span>Enable</span>
      </label>`)
  .add('input', () => {
    const selectedClass = radios('class', {
      default: '',
      'is-success': 'is-success',
      'is-warning': 'is-warning',
      'is-error': 'is-error',
    }, '');

    return `<input type="text" id="name_field" class="nes-input ${selectedClass}" placeholder="NES.css">`;
  });
