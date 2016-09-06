var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Comonad
// https://github.com/fantasyland/fantasy-land#comonad
module.exports = protocol(['w'], {
  extract: ['w']
}, {
  metaobject: new FlProtocol()
})
