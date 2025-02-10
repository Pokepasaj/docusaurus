---
id: config
title: config
---

This module manages and transforms configuration objects.It provides functions to create, modify, and extract configurations while maintaining flexibility for dynamic adjustments.


• from → Creates a new configuration from an object or a renderable object
   If the source is already a configuration, it returns the original source.
   Uses a manifest render function to handle the source if it's renderable.
   Ensures that the result is a valid object; otherwise, it throws an error.

• fromYaml →
Creates a configuration from a YAML string.
Ensures the YAML document is a single configuration (not an array).

• fromJson →
Similar to fromYaml, but for JSON strings.
Converts the JSON into a configuration while ensuring it is a single document.

• new →
Creates a new configuration object.
Stores the configurations render function and properties.

• render →
Resolves properties and renders the configuration using the stored render function.

• extend →
Extends an existing configuration by applying a transformation function.
The function receives the current configuration and modifies it.

• override →
Overrides specific properties of a configuration.
Accepts either an object (new properties) or a function (to compute the new properties dynamically).

• get (path, defaultValue=null)→
Retrieves a value from the configuration using a dot-separated path.
Returns defaultValue if the path does not exist.

• is (kind, name=null)→

• Checks whether the configuration matches a given kind (e.g., "Deployment").
If name is provided, also checks if the resource has the specified name.

## Examples

### config

```
local config = import '../../config.libsonnet';

local testConfig = config.new(function(ctx, props) {
  kind: 'config',
  metadata: {
    name: props.name,
  },
}, {
  name: 'test',
});

{
  actual: testConfig.render(),
  expect: {
    kind: 'config',
    metadata: {
      name: 'test',
    },
  },
}
```
### YAML output
```yaml
actual:
  kind: config
  metadata:
    name: test
expect:
  kind: config
  metadata:
    name: test
```
### config extend

```
local config = import '../../config.libsonnet';

local config = import '../../config.libsonnet';

local testConfig = config.new(function(ctx, props) {
  kind: 'config',
  metadata: {
    name: props.name,
  },
}, {
  name: 'test',
}).extend(
  function(ctx, config, props) (
    config {
      extended: true,
    }
  ), {
    name: 'not-test',
  }
);

{
  actual: testConfig.render(),
  expect: {
    extended: true,
    kind: 'config',
    metadata: {
      name: 'not-test',
    },
  },
}
```
### YAML output
```yaml
actual:
  extended: true
  kind: config
  metadata:
    name: not-test
expect:
  extended: true
  kind: config
  metadata:
    name: not-test
```
### config from object
```
local config = import '../../config.libsonnet';
local test = import 'jsonnetunit/test.libsonnet';

local configFrom = config.from({
  kind: 'config',
  metadata: {
    name: 'one',
  },
});

{
  type: {
    actual: configFrom.type,
    expect: 'config',
  },
  render: {
    actual: configFrom.render(),
    expect: {
      kind: 'config',
      metadata: {
        name: 'one',
      },
    },
  },
}
```
### YAML output
```yaml
render:
  actual:
    kind: config
    metadata:
      name: one
  expect:
    kind: config
    metadata:
      name: one
type:
  actual: config
  expect: config
```
### config override function

```
local config = import '../../config.libsonnet';

local config = import '../../config.libsonnet';

local testConfig = config.new(function(ctx, props) {
  kind: 'config',
  metadata: {
    name: props.name,
  },
}, {
  name: 'test',
}).override(
  function(props)
    {
      name: 'override-' + props.name,
    }
);

{
  actual: testConfig.render(),
  expect: {
    kind: 'config',
    metadata: {
      name: 'override-test',
    },
  },
}
```

### YAML output
```yaml
actual:
  kind: config
  metadata:
    name: override-test
expect:
  kind: config
  metadata:
    name: override-test
```

### config override

```
local config = import '../../config.libsonnet';

local config = import '../../config.libsonnet';

local testConfig = config.new(function(ctx, props) {
  kind: 'config',
  metadata: {
    name: props.name,
  },
}, {
  name: 'test',
}).override(
  {
    name: 'not-test',
  }
);

{
  actual: testConfig.render(),
  expect: {
    kind: 'config',
    metadata: {
      name: 'not-test',
    },
  },
}
```

### YAML output
```yaml
actual:
  kind: config
  metadata:
    name: not-test
expect:
  kind: config
  metadata:
    name: not-test
```
