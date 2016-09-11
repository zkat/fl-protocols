var protocol = require('protoduck')
var FlProtocol = require('./fl-protocol-metaobject')

// Apply
// https://github.com/fantasyland/fantasy-land#apply
module.exports = protocol(['f'], {
  ap: ['f']
}, {
  metaobject: new FlProtocol()
})
