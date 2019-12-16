import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Buttons from './buttons.template';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Buttons', () => Buttons());
