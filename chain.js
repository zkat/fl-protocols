var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Chain
// https://github.com/fantasyland/fantasy-land#chain
module.exports = protocol(['m'], {
  chain: ['m']
}, {
  metaobject: new FlProtocol()
})
