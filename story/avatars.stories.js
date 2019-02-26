import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Avatars', module);
stories.addDecorator(withKnobs);

stories.add('avatars', () => {
  const options = radios('class', {
    'is-small': 'is-small',
    default: '',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, '');
  const isRounded = boolean('is-rounded', false) ? 'is-rounded' : '';
  const selectedClasses = [isRounded, options].join(' ');

  return `<img src="http://www.gravatar.com/avatar?s=15" class="nes-avatar ${selectedClasses}"
    alt="Gravatar Image Example"
    style="image-rendering: pixelated;">`;
});
