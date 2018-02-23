class CacheSet extends Set {

  constructor (ttl, iterable) {
    super()
    if (iterable) this.add(ttl, ...iterable)
  }

  add (ttl, ...values) {
    var self = this
    for (var value of values) super.add(value)
    var timeout = setTimeout(function () {
        for (var value of values) self.delete(value)
      }, ttl)
    if (timeout.unref) timeout.unref()
    return this
  }

}

module.exports = CacheSet
