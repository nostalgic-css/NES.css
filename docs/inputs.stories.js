import { storiesOf } from '@storybook/html'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Inputs', module)
  .add('input.radio', () => `
      <label>
        <input type="radio" class="radio" name="answer" checked />
        <span>Yes</span>
      </label> <label>
        <input type="radio" class="radio" name="answer" />
        <span>No</span>
      </label>`)
  .add('input.checkbox', () => `
      <label>
        <input type="checkbox" class="checkbox" checked />
        <span>Enable</span>
      </label>`)
  .add('input.input', () => `
        <input type="text" id="name_field" class="input">`)
  .add('input.input.is-success', () => `
        <input type="text" class="input is-success" placeholder="NES.css">`)
  .add('input.input.is-warning', () => `
        <input type="text" class="input is-warning" placeholder="8bit.css">`)
  .add('input.input.is-error', () => `
        <input type="text" class="input is-error" placeholder="awesome.css">`);
