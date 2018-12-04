import { storiesOf } from '@storybook/html';

import '../css/nes.css';

storiesOf('Containers', module)
  .add('.container.with-title', () => `<div class="container with-title">
          <p class="title">Container</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.container.with-title.is-center', () => `<div class="container with-title is-center">
          <p class="title">Container.is-center</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.container.with-title.is-right', () => `<div class="container with-title is-right">
          <p class="title">Container.is-right</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>`)
  .add('.container.with-title.is_dark', () => `<div class="container with-title is-dark">
          <p class="title">Container</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.container.with-title.is-center.is-dark', () => `<div class="container with-title is-center is-dark">
          <p class="title">Container.is-center</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>`)
  .add('.container.with-title.is-right.is-dark', () => `<div class="container with-title is-right is-dark">
          <p class="title">Container.is-right</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>`)
  .add('.container.is-rounded', () => `<div class="container is-rounded">
          <p class="title">Container.is-right</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>`)
  .add('.container.is-rounded.is-dark', () => `<div class="container is-rounded is-dark">
          <p class="title">Container.is-right</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>`);
