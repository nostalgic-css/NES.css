import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Containers from './containers.template';

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .add('Container', () => Containers());
