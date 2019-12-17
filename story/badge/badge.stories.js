import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Badge from './badge.template';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('Badge', () => Badge());
