var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Foldable
// https://github.com/fantasyland/fantasy-land#foldable
module.exports = protocol(['a', 'f', 'acc'], {
  reduce: ['a', 'f', 'acc']
}, {
  metaobject: new FlProtocol()
})
