import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Containers', module);
stories.addDecorator(withKnobs);

stories.add('container', () => {
  const withTitle = boolean('with-title', false) ? 'with-title' : '';
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';
  const isRounded = boolean('is-rounded', false) ? 'is-rounded' : '';
  const alignment = radios('alignment', {
    default: '',
    'is-centered': 'is-centered',
    'is-right': 'is-right',
  }, '');
  const selectedClasses = [withTitle, isDark, isRounded, alignment];

  return `<div class="nes-container ${selectedClasses.join(' ')}">
      <p class="title">Container</p>
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
  </div>`;
});
