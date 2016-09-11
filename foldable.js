var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Foldable
// https://github.com/fantasyland/fantasy-land#foldable
module.exports = protocol(['f', 'acc'], {
  reduce: ['f', 'acc']
}, {
  metaobject: new FlProtocol()
})
