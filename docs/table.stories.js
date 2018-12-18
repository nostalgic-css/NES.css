import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, boolean,
} from '@storybook/addon-knobs';

const stories = storiesOf('Tables', module);
stories.addDecorator(withKnobs);

stories.add('table', () => {
  const isBordered = boolean('is-bordered', true) ? 'is-bordered' : '';
  const isCentered = boolean('is-centered', false) ? 'is-centered' : '';
  const isDark = boolean('is-dark', false) ? 'is-dark' : '';

  const selectedClasses = [isBordered, isCentered, isDark];

  return `<table class="nes-table ${selectedClasses.join(' ')}" style="margin:15px 4px 5px 4px">
        <thead>
          <tr>
            <th>Table.is-dark</th>
            <th>Table.is-bordered</th>
            <th>Table.is-centered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good night</td>
          </tr>
          <tr>
            <td>Thou hast had a good morning</td>
            <td>Thou hast had a good afternoon</td>
            <td>Thou hast had a good night</td>
          </tr>
        </tbody>
      </table>`;
});
