const sampleCollection = [
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
    title: 'Inputs',
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
    title: 'Textarea',
    showCode: false,
    code: `<label for="textarea_field">Textarea</label>
<textarea id="textarea_field" class="nes-textarea"></textarea>`,
  },
  {
    title: 'Selects',
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
