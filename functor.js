var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Functor
// https://github.com/fantasyland/fantasy-land#functor
module.exports = protocol(['f'], {
  map: ['f']
}, {
  metaobject: new FlProtocol()
})
