import { storiesOf } from '@storybook/html';

import '../css/nes.css';

storiesOf('Containers', module)
  .add('default', () => `<div class="container with-title">
          <p class="title">Container</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.is-center', () => `<div class="container with-title is-center">
          <p class="title">Container.is-center</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.is-right', () => `<div class="container with-title is-right">
          <p class="title">Container.is-right</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>`);
