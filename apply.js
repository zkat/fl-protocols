var protocol = require('@zkat/protocols')
var FlProtocol = require('./fl-protocol-metaobject')

// Apply
// https://github.com/fantasyland/fantasy-land#apply
module.exports = protocol(['a'], {
  ap: ['a']
}, {
  metaobject: new FlProtocol()
})
