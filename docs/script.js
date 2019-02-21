const sampleCollection = [
  {
    title: 'texts',
    showCode: false,
    code: `<span class="nes-text is-primary">Primary</span>
<span class="nes-text is-success">Success</span>
<span class="nes-text is-warning">Warning</span>
<span class="nes-text is-error">Error</span>
<span class="nes-text is-disabled">Disabled</span>`,
  },
  {
    title: 'buttons',
    showCode: false,
    code: `<a class="nes-btn">Normal</a>

<button type="button" class="nes-btn is-primary">Primary</button>
<button type="button" class="nes-btn is-success">Success</button>
<button type="button" class="nes-btn is-warning">Warning</button>
<button type="button" class="nes-btn is-error">Error</button>
<button type="button" class="nes-btn is-disabled">Disabled</button>`,
  },
  {
    title: 'radios',
    showCode: false,
    code: `<label>
  <input type="radio" class="nes-radio" name="answer" checked />
  <span>Yes</span>
</label>

<label>
  <input type="radio" class="nes-radio" name="answer" />
  <span>No</span>
</label>`,
  },
  {
    title: 'checkboxes',
    showCode: false,
    code: `<label>
  <input type="checkbox" class="nes-checkbox" checked />
  <span>Enable</span>
</label>

<div style="background-color:#212529; padding: 1rem;">
  <label>
    <input type="checkbox" class="nes-checkbox is-dark" checked />
    <span>Dark</span>
  </label>
</div>`,
  },
  {
    title: 'inputs',
    showCode: false,
    code: `<div class="nes-field">
  <label for="name_field">Your name</label>
  <input type="text" id="name_field" class="nes-input">
</div>

<div class="nes-field is-inline">
  <label for="inline_field">.input.is-success</label>
  <input type="text" id="inline_field" class="nes-input is-success" placeholder="NES.css">
</div>

<div class="nes-field is-inline">
  <label for="warning_field">.input.is-warning</label>
  <input type="text" id="warning_field" class="nes-input is-warning" placeholder="8bit.css">
</div>

<div class="nes-field is-inline">
  <label for="error_field">.input.is-error</label>
  <input type="text" id="error_field" class="nes-input is-error" placeholder="awesome.css">
</div>`,
  },
  {
    title: 'textarea',
    showCode: false,
    code: `<label for="textarea_field">Textarea</label>
<textarea id="textarea_field" class="nes-textarea"></textarea>`,
  },
  {
    title: 'selects',
    showCode: false,
    code: `<div class="nes-select">
  <select required>
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<div class="nes-select is-success">
  <select required>
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<div class="nes-select is-warning">
  <select required>
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<div class="nes-select is-error">
  <select required>
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>`,
  },
  {
    title: 'containers',
    showCode: false,
    code: `<div class="nes-container with-title is-centered">
  <p class="title">Container.is-centered</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="nes-container is-dark with-title">
  <p class="title">Container.is-dark</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="nes-container is-rounded">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="nes-container is-rounded is-dark">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>`,
  },
  {
    title: 'dialogs',
    note:
      'NES.css does not include any JavaScript. If you want to use dialog element other than Chrome, you need polyfill.',
    showCode: false,
    code: `<!-- Dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-default').showModal();">
    Open dialog
  </button>
  <dialog class="nes-dialog" id="dialog-default">
    <form method="dialog">
      <p class="title">Dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Cancel</button>
        <button class="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-dark').showModal();">
    Open dark dialog
  </button>
  <dialog class="nes-dialog is-dark" id="dialog-dark">
    <form method="dialog">
      <p class="title">Dark dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Cancel</button>
        <button class="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Rounded dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
    Open rounded dialog
  </button>
  <dialog class="nes-dialog is-rounded" id="dialog-rounded">
    <form method="dialog">
      <p class="title">Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Cancel</button>
        <button class="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark and Rounded dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-dark-rounded').showModal();">
    Open dark and rounded dialog
  </button>
  <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
    <form method="dialog">
      <p class="title">Dark and Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Cancel</button>
        <button class="nes-btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>`,
  },
  {
    title: 'avatar',
    description: 'It is recommended to "image-rendering: pixelated".',
    showCode: false,
    code: `<img class="nes-avatar" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">

<img class="nes-avatar is-small" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-medium" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-large" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">


<img class="nes-avatar is-rounded" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">

<img class="nes-avatar is-rounded is-small" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-rounded is-medium" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-rounded is-large" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">`,
  },
];

const coreteam = [
  {
    name: 'B.C.Rikko',
    feat: 'Creator of NES.css',
    github: 'BcRikko',
    twitter: 'bc_rikko',
  },
  {
    name: 'Igor Guastalla',
    feat: 'Create icons',
    github: 'guastallaigor',
    twitter: 'guastallaigor',
  },
];

const emeriti = [
  {
    name: 'Trezy',
    feat: 'Setup DevOps',
    github: 'trezy',
    twitter: 'TrezyCodes',
  },
  {
    name: 'Abdullah Samman',
    feat: 'Setup test suite',
    github: 'evexoio',
    twitter: 'evexoio',
  },
];

// curl https://api.github.com/repos/nostalgic-css/NES.css/contributors | jq '.[].login'
const contributors = [
  '4k1k0',
  'sombreroEnPuntas',
  'Divoolej',
  'soph-iest',
  'montezume',
  'sazzadsazib',
  'KeevanDance',
  'jdvivar',
  'IngwiePhoenix',
  'jjspace',
  'Baldomo',
  'DanSnow',
  'ernestomancebo',
  'Ilyeo',
  'Kartones',
  'rrj-dev',
  'vicainelli',
  'stewartrule',
  'kenshinji',
  'youngkaneda',
  'Takumi0901',
  'loo41',
  'alexgleason',
  'agarzola',
  'fleeting',
  'JamesIves',
];

const articles = [
  {
    icon: 'medium',
    title: 'Why I created and released NES.css',
    url: 'https://medium.com/@bc_rikko/why-i-created-and-released-nes-css-ee8966bacd09',
  },
  {
    icon: 'github',
    title: 'Release Radar · December 2018 | The GitHub Blog',
    url: 'https://github.blog/2019-01-20-release-radar-december-2018/#nes-css-1-0',
  },
];

new Vue({
  el: '#nescss',
  data() {
    return {
      collection: sampleCollection,
      coreteam,
      emeriti,
      contributors,
      articles,
      animateOctocat: false,
      copiedBalloon: {
        display: 'none',
        top: 0,
        left: 0,
      },
    };
  },
  filters: {
    capitalize(val) {
      if (!val) return '';
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
  mounted() {
    hljs.initHighlightingOnLoad();
  },
  methods: {
    copy(event, id) {
      this.showCopiedBalloon(event.pageY, event.pageX);

      const fake = document.createElement('textarea');
      fake.value = this.collection.find(a => a.title === id).code;
      fake.setAttribute('readonly', '');
      Object.assign(fake.style, {
        position: 'absolute',
        left: '-9999px',
      });
      this.$el.appendChild(fake);
      fake.select();
      document.execCommand('copy');
      this.$el.removeChild(fake);
    },
    startAnimate() {
      this.animateOctocat = true;
    },
    stopAnimate() {
      this.animateOctocat = false;
    },
    showCopiedBalloon(top, left) {
      this.copiedBalloon = {
        display: 'block',
        top: `${top - 100}px`,
        left: `${left - 180}px`,
      };
      setTimeout(() => {
        this.copiedBalloon.display = 'none';
      }, 1000);
    },
  },
});
