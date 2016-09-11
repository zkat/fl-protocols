var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Monoid
// https://github.com/fantasyland/fantasy-land#monoid
module.exports = protocol({
  empty: []
}, {
  metaobject: new FlProtocol({targetConstructor: true})
})
