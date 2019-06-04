import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Selects', module);
stories.addDecorator(withKnobs);

stories.add('select', () => {
  const selectedClass = radios('class', {
    default: '',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
    'is-dark': 'is-dark',
  }, '');

  return `
    <div class="nes-select ${selectedClass}">
      <select required>
        <option value="" disabled selected hidden>Select...</option>
        <option value="0">To be</option>
        <option value="1">Not to be</option>
      </select>
    </div>
  `;
});
