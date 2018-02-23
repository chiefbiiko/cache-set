class CacheSet extends Set {

  constructor (ttl, iterable) {
    super()
    for (var item of (iterable || [])) this.add(ttl, item)
  }

  add (ttl, value) {
    super.add(value)
    var self = this
    var timeout = setTimeout(function () {
      self.delete(value)
    }, ttl)
    if (timeout.unref) timeout.unref()
    return this
  }

}

module.exports = CacheSet
