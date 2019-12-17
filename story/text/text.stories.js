import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Text from './text.template';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Text', () => Text());
