import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Textarea from './textarea.template';

storiesOf('Textareas', module)
  .addDecorator(withKnobs)
  .add('Textarea', () => Textarea());
