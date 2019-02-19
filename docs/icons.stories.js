import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select, radios,
} from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('icon', () => {
  const selectedClass = select('class', {
    'nes-icon twitter': 'nes-icon twitter',
    'nes-icon facebook': 'nes-icon facebook',
    'nes-icon github': 'nes-icon github',
    'nes-icon google': 'nes-icon google',
    'nes-icon youtube': 'nes-icon youtube',
    'nes-icon whatsapp': 'nes-icon whatsapp',
    'nes-icon gmail': 'nes-icon gmail',
    'nes-icon linkedin': 'nes-icon linkedin',
    'nes-icon instagram': 'nes-icon instagram',
    'nes-icon close': 'nes-icon close',
    'nes-icon coin': 'nes-icon coin',
    'nes-pokeball': 'nes-pokeball',
    'nes-bulbasaur': 'nes-bulbasaur',
    'nes-charmander': 'nes-charmander',
    'nes-squirtle': 'nes-squirtle',
    'nes-smartphone': 'nes-smartphone',
    'nes-kirby': 'nes-kirby',
    'nes-phone': 'nes-phone',
    'nes-octocat animate': 'nes-octocat animate',
    'nes-ash': 'nes-ash',
    'nes-icon trophy': 'nes-icon trophy',
    'nes-mario': 'nes-mario',
    'nes-logo': 'nes-logo',
    'nes-jp-logo': 'nes-jp-logo',
    'snes-logo': 'snes-logo',
    'snes-jp-logo': 'snes-jp-logo',
  }, 'nes-icon twitter');
  const selectedSize = radios('size', {
    default: '',
    'is-small': 'is-small',
    'is-medium': 'is-medium',
    'is-large': 'is-large',
  }, '');

  return `<i class="${selectedClass} ${selectedSize}"></i>`;
});
