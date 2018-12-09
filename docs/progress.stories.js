import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, number,
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
  return `<progress class="nes-progress" value="${percentage}" max="100" style="width: 98%;"></progress>`;
});
