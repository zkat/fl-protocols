var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Profunctor
// https://github.com/fantasyland/fantasy-land#profunctor
module.exports = protocol(['p'], {
  promap: ['p']
}, {
  metaobject: new FlProtocol()
})
