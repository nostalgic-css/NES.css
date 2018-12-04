import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Containers', module);
stories.addDecorator(withKnobs);

stories.add('container', () => {
  const withTitle = boolean('with-title', false) ? 'with-title' : '';
  const isCenter = boolean('is-center', false) ? 'is-center' : '';
  const isRight = boolean('is-right', false) ? 'is-right' : '';
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';
  const isRounded = boolean('is-rounded', false) ? 'is-rounded' : '';
  const selectedClasses = [withTitle, isCenter, isRight, isDark, isRounded];

  return `<div class="container ${selectedClasses.join(' ')}">
      <p class="title">Container</p>
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
  </div>`;
});
