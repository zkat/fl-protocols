'use strict'

var protocol = require('protoduck')
var fl = require('fantasy-land')
var slice = [].slice

var Metaobject = module.exports = function (opts) {
  this.targetConstructor = opts && opts.targetConstructor
}

protocol.meta.createGenfun.add([Metaobject], function (mo, p, target, name) {
  var gf = protocol.meta.createGenfun.callNextMethod()
  // There's an annoying bug in genfun that means [] methods break
  if (!target) {
    gf.add([], function (target) {
      if (target[fl[name]]) {
        return target[fl[name]].apply(target, slice.call(arguments, 1))
      } else if (mo.targetConstructor && target.constructor[fl[name]]) {
        return target.constructor[fl[name]].apply(this, arguments)
      } else {
        return protocol.noImplFound(gf, this, arguments)
      }
    })
  } else {
    target[fl[name]] = gf
  }
  return gf
})

protocol.meta.addMethod.add([Metaobject], function (mo, p, target, name, types, fn) {
  protocol.meta.addMethod.callNextMethod()
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
