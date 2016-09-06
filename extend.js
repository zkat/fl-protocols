var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Extend
// https://github.com/fantasyland/fantasy-land#extend
module.exports = protocol(['w'], {
  extend: ['w']
}, {
  metaobject: new FlProtocol()
})
