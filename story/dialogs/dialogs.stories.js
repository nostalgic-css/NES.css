import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Dialogs from './dialogs.template';

storiesOf('Dialogs', module)
  .addDecorator(withKnobs)
  .add('Dialog', () => Dialogs());
