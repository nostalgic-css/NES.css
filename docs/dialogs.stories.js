import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Dialogs', module);
stories.addDecorator(withKnobs);

stories.add('dialog', () => {
  const open = boolean('open', true) ? 'open' : '';
  const isRounded = boolean('is-rounded', false) ? 'is-rounded' : '';
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';
  const selectedClasses = [isRounded, isDark];

  return `<dialog class="nes-dialog ${selectedClasses.join(' ')}" ${open}>
      <p class="title">Dialog</p>
      <p>Alert: this is a dialog.</p>
  </div>`;
});
