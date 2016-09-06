# Fantasyland Protocols

This module provides a
[`fantasy-land`](https://github.com/fantasyland/fantasy-land) compatibility
layer using [`protocols`](https://github.com/zkat/protocols). The compatibility
layer includes protocol definitions for all protocols with methods listed in the
`fantasy-land` spec, and includes automatic two-way compatibility between
methods defined in either world.

That is: you can use protocol functions exported by `fl-protocols` on any
object(s) that have `fantasy-land` methods implemented, without any extra work,
and and methods you define using `fl-protocols` will automatically become
available to `fantasy-land` users even if they are not directly using
`fl-protocols`.

Even multiple-dispatched protocols will work two-ways, so `fl-protocols` is a
great way to augment your `fantasy-land` implementations!

## Example

```
// Basic two-way compatibility
> var flp = require('@zkat/fl-protocols')
undefined
> var fl = require('fantasy-land')
> var Monoid = require('@zkat/fl-protocols/monoid')
undefined
> Monoid([Number], { empty: () => 0 })
undefined
> flp.empty(1)
0
> Number(1)[fl.empty]()
0
// has a bug, but should work soon...
> var obj = { [fl.empty]: () => {} }
> flp.empty(obj)
{}
> Monoid.empty(obj)
{}

// Multiple dispatch on fl methods
> var Setoid = require('@zkat/fl-protocols/setoid')
undefined
> Setoid([Number, String], {
    equals: (n, s) => n === parseFloat(s)
  })
> Setoid([String, Number], {
    equals: (s, n) => parseFloat(s) === n
  })
> Number(5)[fl.equals]("5")
true
> String("1")[fl.equals](1)
true
```
