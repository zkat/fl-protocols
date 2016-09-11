var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Bifunctor
// https://github.com/fantasyland/fantasy-land#bifunctor
module.exports = protocol(['f', 'g'], {
  bimap: ['f', 'g']
}, {
  metaobject: new FlProtocol()
})
