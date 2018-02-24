class CacheSet extends Set {

  constructor (ttl, iterable) {
    super()
    if (iterable) this.add(ttl, ...iterable)
  }

  add (ttl, ...items) {
    var self = this
    for (var item of items) super.add(item)
    var timeout = setTimeout(function () {
      for (var item of items) self.delete(item)
    }, ttl)
    if (timeout.unref) timeout.unref()
    return this
  }

}

module.exports = CacheSet
