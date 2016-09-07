'use strict'

var protocol = require('@zkat/protocols')
var genfun = require('genfun')
var fl = require('fantasy-land')

var Metaobject = module.exports = function (opts) {
  this.targetConstructor = opts && opts.targetConstructor
}

protocol.meta.addMethod.add([Metaobject], function (mo, p, name, types, fn) {
  var target = typeof types[0] === 'function' ? types[0].prototype : types[0]
  genfun.callNextMethod()
  if (target) {
    var gf = p[name]
    target[fl[name]] = function () {
      return gf.apply(this, [this].concat(arguments))
    }
  }
})

protocol.meta.createGenfun.add([Metaobject], function (mo, p, name) {
  var gf = genfun.callNextMethod()
  // There's an annoying bug in genfun that means [] methods break
  gf.add([], function (target) {
    if (target[fl[name]]) {
      return target[fl[name]].apply(target, [].slice.call(arguments, 1))
    } else if (mo.targetConstructor && target.constructor[fl[name]]) {
      return target.constructor[fl[name]].apply(
        target, [].slice.call(arguments, 1))
    } else {
      return protocol.noImplFound(gf, this, arguments)
    }
  })
  return gf
})
