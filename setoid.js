var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Setoid
// https://github.com/fantasyland/fantasy-land#setoid
module.exports = protocol(['a'], {
  equals: ['a', 'a']
}, {
  metaobject: new FlProtocol()
})
