import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Icons from './icons.template';
import Sprites from './sprites.template';
import Reactions from './reactions.template';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Icons', () => Icons())
  .add('Sprites', () => Sprites())
  .add('Reactions', () => Reactions());
