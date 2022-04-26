import { el, text, mount } from 'redom'
import { Router } from './router'
import { Button, Counter, Header } from './components'

class Count {
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

  update(count = this.state.count) {
    this.counter.update(count)
  }
}

class App {
  constructor(attr, children) {
    console.log(children);
    <div this="el">
      <Header router={router} />
      {children}
    </div>
  }
}

const views = {
  home: <Count />,
  about: <div>about page</div>,
  not_found: <div>not found <a href="#home" onclick={() => router.push('home')}>go home</a></div>
}

const router = new Router({
  container: '#app',
  catchRoute: 'not_found'
}, views)

mount(
  document.body,
  <App>{router.el}</App>
)
