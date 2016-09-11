var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Traversable
// https://github.com/fantasyland/fantasy-land#traversable
module.exports = protocol({
  sequence: []
}, {
  metaobject: new FlProtocol()
})
