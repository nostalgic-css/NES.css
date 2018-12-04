import { storiesOf } from '@storybook/html';

import '../css/nes.css';

storiesOf('Buttons', module)
  .add('button.btn', () => ' <button type="button" class="btn">Normal</button>')
  .add('button.btn.is-primary', () => '<button type="button" class="btn is-primary">Primary</button>')
  .add('button.btn.is-success', () => '<button type="button" class="btn is-success">Success</button>')
  .add('button.btn.is-warning', () => '<button type="button" class="btn is-warning">Warning</button>')
  .add('button.btn.is-error', () => '<button type="button" class="btn is-error">Error</button>');
