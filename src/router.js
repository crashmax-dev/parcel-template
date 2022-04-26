import { router } from 'redom'

export class Router {
  constructor(attr, views) {
    this.router = router(attr.container, views)
    const hash = location.hash.slice(1)
    const isContainsHash = Object
      .keys(views)
      .includes(hash)

    if (hash && isContainsHash) {
      this.push(hash)
    } else {
      this.push(attr.catchRoute)
    }
  }

  get el() {
    return this.router.el
  }

  push(route, data) {
    console.log(this.router)
    this.router.update(route, data)
  }
}
