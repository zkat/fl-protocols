var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Applicative
// https://github.com/fantasyland/fantasy-land#applicative
module.exports = protocol(['f'], {
  of: ['f']
}, {
  metaobject: new FlProtocol()
})
