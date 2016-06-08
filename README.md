.fbp loader for webpack
=======================

This module provides a webpack [loader](http://webpack.github.io/docs/using-loaders.html) for the [`.fbp` syntax](https://github.com/flowbased/fbp) used in [Flow-Based Programming](https://en.wikipedia.org/wiki/Flow-based_programming) environments.

### Example configuration

``` javascript
{
  module: {
    loaders: [
      { test: /\.fbp$/, loader: "fbp-loader" },
    ]
  }
}
```
