'use strict'

var protocol = require('protoduck')
var fl = require('fantasy-land')
var slice = [].slice

var Metaobject = module.exports = function (opts) {
  this.targetConstructor = opts && opts.targetConstructor
}

protocol.meta.createGenfun.add([Metaobject], function (mo, p, target, name) {
  var gf = protocol.meta.createGenfun.callNextMethod()
  if (target) {
    target[fl[name]] = gf
  } else {
    gf.add([], function (target) {
      if (target[fl[name]]) {
        return target[fl[name]].apply(target, slice.call(arguments, 1))
      } else if (mo.targetConstructor && target.constructor[fl[name]]) {
        return target.constructor[fl[name]].apply(this, arguments)
      } else {
        return protocol.noImplFound(gf, this, arguments)
      }
    })
  }
  return gf
})

protocol.meta.addMethod.add([Metaobject], function (mo, p, target, name, types, fn) {
  protocol.meta.addMethod.callNextMethod()
  // if there was a target, then target[name] is a genfun and is sharing the
  // same object with target[fl[name]], so we don't need to do any work
  // in that case
  if (!target) {
    var tgt = typeof types[0] === 'function' ? types[0].prototype : types[0]
    tgt = tgt || Object.prototype
    if (!tgt[fl[name]]) {
      protocol.meta.createGenfun(mo, p, tgt, name)
    }
    tgt[fl[name]].add(slice.call(types, 1), function () {
      fn.apply(this, [this].concat(arguments))
    })
  }
})
