import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Balloons', module)
  .add('.balloon.from-left', () => '<div class="balloon from-left"> <p>Hello NES.css</p> </div>')
  .add('.balloon.from-right', () => '<div class="balloon from-right"> <p>Hello NES.css</p> </div>');
