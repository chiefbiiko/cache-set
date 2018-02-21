class CacheSet extends Set {

  constructor (conf) {
    super()
    this._conf = conf
    this._timeout = null
  }

  add (value) {
    if (this.size === this._conf.maxSize) return this
    super.add(value)
    var self = this
    this._timeout = setTimeout(function () {
      self.delete(value)
    }, this._conf.maxAge)
    if (this._timeout.unref) this._timeout.unref()
    return this
  }

}

module.exports = CacheSet
