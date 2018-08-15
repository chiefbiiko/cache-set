const isUint = x => typeof x === 'number' && !isNaN(x) && x % 1 === 0 && x >= 0

class CacheSet extends Set {

  constructor (ttl, iterable) {
    super()
    if (iterable) this.add(ttl, ...iterable)
  }

  add (ttl, ...items) {
    if (!isUint(ttl)) throw new TypeError('ttl is not an unsigned integer')
    for (const item of items) super.add(item)
    const timeout = setTimeout(() => {
      for (const item of items) this.delete(item)
    }, ttl)
    if (timeout.unref) timeout.unref()
    return this
  }

  find (pred) {
    for (const v of this.values())
      if (pred(v)) return v
  }

}

module.exports = CacheSet
