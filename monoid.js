var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Monoid
// https://github.com/fantasyland/fantasy-land#monoid
module.exports = protocol(['a'], {
  empty: ['a']
}, {
  metaobject: new FlProtocol({targetConstructor: true})
})
