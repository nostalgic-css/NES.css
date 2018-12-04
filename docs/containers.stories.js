import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Containers', module);
stories.addDecorator(withKnobs);

stories.add('container', () => {
  const selectedClass = select('class', {
    container: 'container',
    'container with-title': 'container with-title',
    'container with-title is-center': 'container with-title is-center',
    'container with-title is-right': 'container with-title is-right',
    'container with-title is-dark': 'container with-title is-dark',
    'container with-title is-center is-dark': 'container with-title is-center is-dark',
    'container with-title is-right is-dark': 'container with-title is-right is-dark',
    'container is-rounded': 'container is-rounded',
    'container is-rounded is-dark': 'container is-rounded is-dark',
  }, 'container');

  return `<div class="${selectedClass}">
      <p class="title">Container</p>
      <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
  </div>`;
});
