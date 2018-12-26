module.exports = [{
  kind: 'Avatars',
  name: 'avatars',
  knobs: {
    class: ['is-small', '', 'is-medium', 'is-large'],
    'is-rounded': false,
  },
}, {
  kind: 'Balloons',
  name: 'balloon',
  knobs: {
    class: ['', 'from-left', 'from-right'],
  },
}, {
  kind: 'Lists',
  name: 'list',
  knobs: {
    type: ['is-disc', 'is-circle'],
  },
}, {
  kind: 'Progress',
  name: 'progress',
  knobs: {
    class: ['', 'is-primary', 'is-success', 'is-error', 'is-pattern'],
    percentage: 50,
  },
}, {
  kind: 'Select',
  name: 'select',
  knobs: {
    class: ['', 'is-success', 'is-warning', 'is-error'],
  },
}, {
  kind: 'Tables',
  name: 'table',
  knobs: {
    'is-bordered': false,
    'is-centered': false,
    'is-dark': false,
  },
}, {
  kind: 'Textareas',
  name: 'textarea',
  knobs: {
    class: ['', 'is-success', 'is-warning', 'is-error'],
  },
}, {
  kind: 'Inputs',
  name: 'input.radio',
}, {
  kind: 'Inputs',
  name: 'input.checkbox',
}, {
  kind: 'Inputs',
  name: 'input',
  knobs: {
    class: ['', 'is-success', 'is-warning', 'is-error'],
  },
}, {
  kind: 'Icons',
  name: 'icon',
  knobs: {
    class: ['nes-icon twitter', 'nes-icon facebook', 'nes-icon github', 'nes-icon google', 'nes-icon youtube', 'nes-icon whatsapp', 'nes-icon gmail', 'nes-icon linkedin', 'nes-icon close', 'nes-pokeball', 'nes-bulbasaur', 'nes-charmander', 'nes-squirtle', 'nes-smartphone', 'nes-kirby', 'nes-phone', 'nes-octocat animate', 'nes-ash', 'nes-icon trophy', 'nes-mario', 'nes-logo', 'nes-jp-logo', 'snes-logo', 'snes-jp-logo'],
    size: ['is-small', '', 'is-medium', 'is-large'],
  },
}, {
  kind: 'Dialogs',
  name: 'dialog',
  knobs: {
    open: false,
    'is-rounded': false,
  },
}, {
  kind: 'Containers',
  name: 'container',
  knobs: {
    alignment: ['', 'is-centered', 'is-right'],
    'with-title': false,
    'is-dark': false,
    'is-rounded': false,
  },
}, {
  kind: 'Buttons',
  name: 'button',
  knobs: {
    class: ['', 'is-primary', 'is-success', 'is-warning', 'is-error', 'is-disabled'],
  },
}];
