---
id: lib
title: lib
---
This is a utility module that provides helper functions for working with configurations, manifests, and rendering logic.

This module supports feature rendering (feature.libsonnet) by providing functions for processing configs.

It ensures that extensions, mappings, and filters work dynamically.
Functions like getPath() and resolveProps() help manage and override configurations smoothly.



• applyExtensions
Applies a list of extensions to configurations.
Iterates over each config and applies all extensions in order.

• getPath
Retrieves a nested value from an object using dot notation.
If the path doesn't exist, it returns the default value.

• isConfig
Checks if an object is a valid config or manifest by verifying its type.

• isRenderable
Determines whether an object has a render() or resolve() function.

• mapConfigs
Applies a transformation function (fn) to each configuration.
Extends the config object with the provided function.


• renderConfigs
Iterates through the given configurations and renders them.
Filters out null results.

• render
Calls render() on a renderable object.
Used mainly for testing.

• resolveProps
Merges properties with default values.
Applies any overrides.

### Examples
