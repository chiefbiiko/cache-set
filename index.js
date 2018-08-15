const isUint = x => typeof x === 'number' && x % 1 === 0 && x >= 0

class CacheSet extends Set {

  constructor (ttl, iterable, hook) {
    super()
    if (iterable && hook) this.add(ttl, ...iterable, hook)
    else if (iterable) this.add(ttl, ...iterable)
  }

  add (ttl, ...items) { // last item can be a willDelete hook
    if (!isUint(ttl)) throw new TypeError('ttl is not an unsigned integer')

    var hook
    if (typeof items[items.length - 1] === 'function') hook = items.pop()
    else hook = doDelete => doDelete()

    items.forEach(item => super.add(item))

    const doDelete = () => items.forEach(item => super.delete(item))
    const timeout = setTimeout(hook.bind(this, doDelete), ttl)

    if (timeout.unref) timeout.unref()
    return this
  }

  find (pred) {
    for (const v of this.values())
      if (pred(v)) return v
  }

}

module.exports = CacheSet
