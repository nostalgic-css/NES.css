import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import Input from './input.template';
import CheckBox from './checkboxes.template';
import Radio from './radio.template';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Input', () => Input())
  .add('Checkbox', () => CheckBox())
  .add('Radio', () => Radio());
