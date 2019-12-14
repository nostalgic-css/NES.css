import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Table from './table.template';

storiesOf('Tables', module)
  .addDecorator(withKnobs)
  .add('Table', () => Table());
