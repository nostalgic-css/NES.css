import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Ballons', module);
stories.addDecorator(withKnobs);

stories.add('balloon', () => {
  const selectedClass = select('class', {
    'balloon from-left': 'balloon from-left',
    'balloon from-right': 'balloon from-right',
  }, 'balloon from-left');
  return `<div class="${selectedClass}"> <p>Hello NES.css</p> </div>`;
});
