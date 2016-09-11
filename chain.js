var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Chain
// https://github.com/fantasyland/fantasy-land#chain
module.exports = protocol(['f'], {
  chain: ['f']
}, {
  metaobject: new FlProtocol()
})
