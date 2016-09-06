var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Semigroup
// https://github.com/fantasyland/fantasy-land#semigroup
module.exports = protocol(['a', 'b'], {
  concat: ['a', 'b']
}, {
  metaobject: new FlProtocol()
})
