# Fantasyland Protocols

This module provides a
[`fantasy-land`](npm.im/fantasy-land) compatibility
layer using [`protoduck`](npm.im/protoduck). The compatibility
layer includes protocol definitions for all protocols with methods listed in the
`fantasy-land` spec, and includes automatic two-way compatibility between
methods defined in either world.

That is: you can use protocol functions exported by `protoduck-fl` on any
object(s) that have `fantasy-land` methods implemented, without any extra work,
and and methods you define using `protoduck-fl` will automatically become
available to `fantasy-land` users even if they are not directly using
`protoduck-fl`.

Even multiple-dispatched protocols will work two-ways, so `protoduck-fl` is a
great way to augment your `fantasy-land` implementations!

## Example

```
// Basic two-way compatibility
> var Monoid = require('protoduck-fl/monoid')
> var fl = require('fantasy-land')

> Monoid(Number, { empty: () => 0 })

> (1)[fl.empty]()
0
> var obj = { [fl.empty]: () => ({}) }
[object Object]
> Monoid.empty(obj)
{}

// Multiple dispatch on fl methods
> var Setoid = require('protoduck-fl/setoid')
> Setoid(Number, [Number], {
    equals: (n) => +this === n
  })
> Setoid(Number, [String], {
    equals: (s) => +this === parseFloat(s)
  })
> Setoid(String, [Number], {
    equals: (n) => parseFloat(''+this) === n
  })
> (10)[fl.equals]("10")
> (5)[fl.equals]("5")
true
> ("1")[fl.equals](1)
true
> Setoid.equals("1", 1)
true
```
