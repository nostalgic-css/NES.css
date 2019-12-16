import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Lists from './lists.template';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('List', () => Lists());
