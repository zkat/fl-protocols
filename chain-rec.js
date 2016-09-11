var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// ChainRec
// https://github.com/fantasyland/fantasy-land#chainrec
module.exports = protocol(['f', 'i'], {
  chainRec: ['f', 'i']
}, {
  metaobject: new FlProtocol({targetConstructor: true})
})
