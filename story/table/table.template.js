import { boolean } from '@storybook/addon-knobs';
import classNames from 'classnames';

export default () => {
  const isBorderd = boolean('is-bordered', true);
  const isCentered = boolean('is-centered', false);
  const isDark = boolean('is-dark', false);

  const tableClasses = classNames(
    'nes-table',
    {
      'is-bordered': isBorderd,
      'is-centered': isCentered,
      'is-dark': isDark,
    },
  );

  return `
    <table class="nes-table ${tableClasses}" style="margin:15px 4px 5px 4px">
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
    </table>
  `;
};
