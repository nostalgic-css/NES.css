import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Tables', module)
  .add('table.table', () => `
      <table class="table" style="margin:15px 4px 5px 4px">
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
      </table>`)
  .add('table.table.is-bordered', () => `
      <table class="table is-bordered" style="margin:15px 4px 5px 4px">
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
      </table>`)
  .add('table.table.is-bordered.is-centered', () => `
      <table class="table is-bordered is-centered" style="margin:15px 4px 5px 4px">
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
      </table>
  `);
