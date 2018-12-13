import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Dialogs', module);
stories.addDecorator(withKnobs);

stories.add('dialog', () => {
  const open = boolean('open', true) ? 'open' : '';

  return `<dialog ${open}>
      <p class="title">Dialog</p>
      <p>Alert: this is a dialog.</p>
  </div>`;
});
