import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Progress from './progress.template';

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('Progress', () => Progress());
