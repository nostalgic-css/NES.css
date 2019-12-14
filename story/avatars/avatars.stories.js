import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Avatars from './avatars.template';

storiesOf('Avatars', module)
  .addDecorator(withKnobs)
  .add('Avatar', () => Avatars());
