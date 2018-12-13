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
  }, 'is-disc');
  return `<ul class="nes-list ${selectedClass}">
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>`;
});
