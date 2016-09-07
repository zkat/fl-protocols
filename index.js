var Setoid = require('./setoid')
var Semigroup = require('./semigroup')
var Monoid = require('./monoid')
var Functor = require('./functor')
var Apply = require('./apply')
var Applicative = require('./applicative')
var Foldable = require('./foldable')
var Traversable = require('./traversable')
var Chain = require('./chain')
var ChainRec = require('./chain-rec')
var Extend = require('./extend')
var Comonad = require('./comonad')
var Bifunctor = require('./bifunctor')
var Profunctor = require('./profunctor')

module.exports = {
  equals: Setoid.equals,
  eq: Setoid.equals,
  concat: Semigroup.concat,
  empty: Monoid.empty,
  map: Functor.map,
  ap: Apply.ap,
  apply: Apply.ap,
  of: Applicative.of,
  reduce: Foldable.reduce,
  sequence: Traversable.sequence,
  chain: Chain.chain,
  chainRec: ChainRec.chainRec,
  extend: Extend.extend,
  extract: Comonad.extract,
  bimap: Bifunctor.bimap,
  promap: Profunctor.promap
}
