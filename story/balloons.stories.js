import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Ballons', module);
stories.addDecorator(withKnobs);

stories.add('balloon', () => {
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';
  const alignment = radios('direction', {
    default: '',
    'from-left': 'from-left',
    'from-right': 'from-right',
  }, '');
  const selectedClasses = [isDark, alignment];
  return `<div class="nes-balloon ${selectedClasses.join(' ')}"> <p>Hello NES.css</p> </div>`;
});
