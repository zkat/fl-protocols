var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Bifunctor
// https://github.com/fantasyland/fantasy-land#bifunctor
module.exports = protocol(['p', 'f', 'g'], {
  bimap: ['p', 'f', 'g']
}, {
  metaobject: new FlProtocol()
})
