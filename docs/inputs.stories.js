import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs);

stories.add('input.radio', () => `
      <label>
        <input type="radio" class="radio" name="answer" checked />
        <span>Yes</span>
      </label> <label>
        <input type="radio" class="radio" name="answer" />
        <span>No</span>
      </label>`)
  .add('input.checkbox', () => `
      <label>
        <input type="checkbox" class="checkbox" checked />
        <span>Enable</span>
      </label>`)
  .add('input', () => {
    const selectedClass = select('class', {
      input: 'input',
      'input is-success': 'input is-success',
      'input is-warning': 'input is-warning',
      'input is-error': 'input is-error',
    }, 'input');

    return `<input type="text" id="name_field" class="${selectedClass}" placeholder="NES.css">`;
  });
