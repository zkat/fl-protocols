var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Functor
// https://github.com/fantasyland/fantasy-land#functor
module.exports = protocol(['a'], {
  map: ['a']
}, {
  metaobject: new FlProtocol()
})
