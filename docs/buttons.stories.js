import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('button', () => {
  const extraClass = select('class', {
    btn: 'btn',
    'btn is-primary': 'btn is-primary',
    'btn is-success': 'btn is-success',
    'btn is-warning': 'btn is-warning',
    'btn is-error': 'btn is-error',
  }, 'btn');
  return `<button type="button" class="btn ${extraClass}">Normal</button>`;
});
