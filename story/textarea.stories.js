import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Textareas', module);
stories.addDecorator(withKnobs);

stories.add('textarea', () => {
  const selectedClass = radios('class', {
    default: '',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
  }, '');

  return `<textarea id="textarea_field" class="nes-textarea ${selectedClass}" placeholder="NES.css"></textarea>`;
});
