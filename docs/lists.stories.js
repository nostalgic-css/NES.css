import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Lists', module);
stories.addDecorator(withKnobs);

stories.add('list', () => {
  const selectedClass = radios('type', {
    default: 'is-disc',
    'is-circle': 'is-circle',
    'is-square': 'is-square',
  }, 'is-disc');
  return `<ul class="nes-list ${selectedClass}"> <li>Test</li> </ul>`;
});
