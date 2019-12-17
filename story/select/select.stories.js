import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Select from './select.template';

storiesOf('Selects', module)
  .addDecorator(withKnobs)
  .add('Select', () => Select());
