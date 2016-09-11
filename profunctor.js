var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Profunctor
// https://github.com/fantasyland/fantasy-land#profunctor
module.exports = protocol(['f'], {
  promap: ['f']
}, {
  metaobject: new FlProtocol()
})
