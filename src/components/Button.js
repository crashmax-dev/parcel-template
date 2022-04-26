import { el } from 'redom'

export class Button {
  constructor({ onclick }, children) {
    <button this="el" onclick={onclick}>
      {children}
    </button>
  }
}
