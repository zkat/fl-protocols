var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// ChainRec
// https://github.com/fantasyland/fantasy-land#chainrec
module.exports = protocol(['a', 'f', 'i'], {
  chainRec: ['a', 'f', 'i']
}, {
  metaobject: new FlProtocol({targetConstructor: true})
})
