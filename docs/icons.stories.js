import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('icon', () => {
  const selectedClass = select('class', {
    'icon twitter': 'icon twitter',
    'icon twitter is-medium': 'icon twitter is-medium',
    'icon twitter is-large': 'icon twitter is-large',
    'icon facebook': 'icon facebook',
    'icon facebook is-medium': 'icon facebook is-medium',
    'icon facebook is-large': 'icon facebook is-large',
    'icon github': 'icon github',
    'icon github is-medium': 'icon github is-medium',
    'icon github is-large': 'icon github is-large',
    'icon youtube': 'icon youtube',
    'icon youtube is-medium': 'icon youtube is-medium',
    'icon youtube is-large': 'icon youtube is-large',
    'icon close': 'icon close',
    'icon close is-medium': 'icon close is-medium',
    'icon close is-large': 'icon close is-large',
    'octocat animate': 'octocat animate',
    'icon trophy': 'icon trophy',
    'icon trophy is-medium': 'icon trophy is-medium',
    'icon trophy is-large': 'icon trophy is-large',
    'nes-logo': 'nes-logo',
    'nes-jp-logo': 'nes-jp-logo',
    'snes-logo': 'snes-logo',
    'snes-jp-logo': 'snes-jp-logo',
  }, 'icon twitter');
  return `<i class="${selectedClass}"></i>`;
});
