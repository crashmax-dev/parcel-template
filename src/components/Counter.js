import { el } from 'redom'

export class Counter {
  constructor({ count }) {
    <span this="el">{count}</span>
  }

  update(count) {
    this.el.textContent = count
  }
}
