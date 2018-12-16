const { html } = window.hybrids;
import * as elements from './elements/index.js';

export default {
  render: () => html`
    <app-store todos='["One", "Two"]'>
      <app-todos></app-todos>
      <app-form></app-form>
    </app-store>
  `.define({ ...elements }),
};