import { html, render } from 'lit-html';

let count = 0;

const update = () => {
  const template = html`
    <h1>Incremental DOM Example</h1>
    <p>Count: ${count}</p>
    <button @click=${() => { count++; update(); }}>Increment</button>
  `;
  render(template, document.getElementById('app'));
};

update();