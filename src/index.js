import { el, text, mount } from 'redom'

class Counter {
  constructor({ count }) {
    <span this="el">{count}</span>
  }

  update(count) {
    this.el.textContent = count
  }
}

class Button {
  constructor({ onclick }, children) {
    <button this="el" onclick={onclick}>
      {children}
    </button>
  }
}

class App {
  state = {
    count: 0
  }

  constructor() {
    <div this="el" className="container">
      <Counter this="counter" count={this.state.count} />
      <Button onclick={() => this.update(++this.state.count)}>
        Plus
      </Button>
      <Button onclick={() => this.update(--this.state.count)}>
        Minus
      </Button>
    </div>
  }

  update(count) {
    this.counter.update(count)
  }
}

mount(document.body, <App />)
