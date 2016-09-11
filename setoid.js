var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Setoid
// https://github.com/fantasyland/fantasy-land#setoid
module.exports = protocol(['b'], {
  equals: ['b']
}, {
  metaobject: new FlProtocol()
})
