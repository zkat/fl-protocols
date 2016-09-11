var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Comonad
// https://github.com/fantasyland/fantasy-land#comonad
module.exports = protocol({
  extract: []
}, {
  metaobject: new FlProtocol()
})
