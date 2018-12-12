import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Lists', module);
stories.addDecorator(withKnobs);

stories.add('list', () => {
  const selectedClass = radios('type', {
    default: 'is-circle',
    'is-arrow': 'is-arrow',
    'is-pointer': 'is-pointer',
  }, 'is-circle');
  return `<ul class="nes-list ${selectedClass}"> <li>Test</li> </ul>`;
});
