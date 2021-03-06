class CacheSet extends Set {

  constructor (ttl, iterable, hook) {
    super()
    if (iterable && hook) this.add(ttl, ...iterable, hook)
    else if (iterable) this.add(ttl, ...iterable)
  }

  add (ttl, ...items) { // last item can be a willDelete hook
    var hook
    if (typeof items[items.length - 1] === 'function') hook = items.pop()
    else hook = (...itemsAndDoDelete) => itemsAndDoDelete.pop()()

    const doDelete = () => items.forEach(item => super.delete(item))
    const willDelete = hook.bind(this, ...items, doDelete)

    items.forEach(item => super.add(item))

    const timeout = setTimeout(willDelete, ttl)
    if (timeout.unref) timeout.unref()

    return this
  }

  find (pred) {
    for (const v of this.values())
      if (pred(v)) return v
  }

  some (pred) {
    for (const v of this.values())
      if (pred(v)) return true
    return false
  }

  every (pred) {
    if (!this.size) return true
    for (const v of this.values())
      if (!pred(v)) return false
    return true
  }

}

module.exports = CacheSet
