var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Traversable
// https://github.com/fantasyland/fantasy-land#traversable
module.exports = protocol(['t'], {
  sequence: ['t']
}, {
  metaobject: new FlProtocol()
})
