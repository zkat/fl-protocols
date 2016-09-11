var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Semigroup
// https://github.com/fantasyland/fantasy-land#semigroup
module.exports = protocol(['b'], {
  concat: ['b']
}, {
  metaobject: new FlProtocol()
})
