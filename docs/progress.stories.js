import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, number, radios, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Progress', module);
stories.addDecorator(withKnobs);

// prettier-ignore
stories.add('progress', () => {
  const percentage = number('percentage', 30, {
    range: true,
    min: 0,
    max: 100,
    step: 1,
  });
  const extraClass = radios('class', {
    default: '',
    'is-primary': 'is-primary',
    'is-success': 'is-success',
    'is-warning': 'is-warning',
    'is-error': 'is-error',
    'is-pattern': 'is-pattern',
  }, '');
  const isRounded = boolean('is-rounded', false) ? 'is-rounded' : '';
  const selectedClasses = [extraClass, isRounded];
  return `<progress class="nes-progress ${selectedClasses.join(' ')}" value="${percentage}" max="100" style="width: 98%;"></progress>`;
});
