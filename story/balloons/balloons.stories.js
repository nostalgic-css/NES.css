import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Ballons from './balloons.template';

storiesOf('Balloons', module)
  .addDecorator(withKnobs)
  .add('Balloon', () => Ballons());
