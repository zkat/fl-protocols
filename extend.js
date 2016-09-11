var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Extend
// https://github.com/fantasyland/fantasy-land#extend
module.exports = protocol({
  extend: []
}, {
  metaobject: new FlProtocol()
})
