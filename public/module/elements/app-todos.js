const { html, parent } = window.hybrids;
import AppStore, { removeTodo } from './app-store.js';

export default {
  store: parent(AppStore),
  render: ({ store: { todos }}) => html`
    <h3>Todo List</h3>
    <ul>
      ${todos.map((todo, index) => html`
        <li onclick="${({ store }) => removeTodo(store, index)}">${todo}</li>
      `.key(index))}
    </ul>
    ${!todos.length && html`
      <p>No todos. Add one.</p>
    `}
  `,
};