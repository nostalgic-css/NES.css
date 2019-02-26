import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Ballons', module);
stories.addDecorator(withKnobs);

stories.add('balloon', () => {
  const selectedClass = radios('direction', {
    default: '',
    'from-left': 'from-left',
    'from-right': 'from-right',
  }, '');
  return `<div class="nes-balloon ${selectedClass}"> <p>Hello NES.css</p> </div>`;
});
