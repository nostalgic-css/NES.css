import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies
import { // eslint-disable-line import/no-extraneous-dependencies
  withKnobs, select,
} from '@storybook/addon-knobs';

const stories = storiesOf('Tables', module);
stories.addDecorator(withKnobs);

stories.add('table', () => {
  const selectedClass = select('class', {
    'table is-bordered': 'table is-bordered',
    'table is-bordered is-centered': 'table is-bordered is-centered',
  }, 'table is-bordered');

  return `<table class="${selectedClass}" style="margin:15px 4px 5px 4px">
        <thead>
          <tr>
            <th>Table</th>
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
