.fbp loader for webpack
=======================

[![Greenkeeper badge](https://badges.greenkeeper.io/flowbased/fbp-loader.svg)](https://greenkeeper.io/)

This module provides a webpack [loader](http://webpack.github.io/docs/using-loaders.html) for the [`.fbp` syntax](https://github.com/flowbased/fbp) used in [Flow-Based Programming](https://en.wikipedia.org/wiki/Flow-based_programming) environments.

### Example configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.fbp$/, loader: "fbp-loader" }
    ]
  }
}
```
