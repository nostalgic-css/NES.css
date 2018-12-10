import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, number, radios,
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
  return `<progress class="nes-progress ${extraClass}" value="${percentage}" max="100" style="width: 98%;"></progress>`;
});
