import { el } from 'redom'

export class Header {
  constructor({ router }) {
    <ul this="el">
      <li>
        <a href="/#home" onclick={() => router.push('home')}>Home</a>
      </li>
      <li>
        <a href="/#about" onclick={() => router.push('about')}>About</a>
      </li>
    </ul>
  }
}
