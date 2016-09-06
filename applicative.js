var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Applicative
// https://github.com/fantasyland/fantasy-land#applicative
module.exports = protocol(['a'], {
  of: ['a']
}, {
  metaobject: new FlProtocol()
})
