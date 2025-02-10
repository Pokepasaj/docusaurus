---
id: app
title: app
---
   This module handles application configurations, allowing for the creation and rendering of configurations through multiple stages.

• new → creates a new manifest with specified features, properties, profiles, and extensions. Filter & map allow further customization for the configurations rendering

• render → resolves and renders the configuration trough extensions and filters

• init → initilizes the configuration with profile-specific properties, merging them with the global ones

• resolve → resolves configurations from sources like features, extensions & individual config objects filtering out null values

• feature → Extracts and processes feature configurations, filtering out null values.

• extensions → Applies extensions to configurations and includes additional extensions from features.

• extend → Creates a new extended manifest by adding new properties, profiles, and configurations.

• filter  → Returns a new manifest with an additional filter function applied. 

• map → Returns a new manifest with a mapping function applied to transform configurations.

• find → Searches the manifest and returns the first configuration that matches the given condition.

• get → Retrieves a configuration by a specific path in its body.

• kget → Retrieves a configuration by its kind and metadata.name fields.


## Examples

### simple app

### Jsonnet
```local app = import '../../app.libsonnet';
local config = import '../../config.libsonnet';
local extension = import '../../extension.libsonnet';
local feature = import '../../feature.libsonnet';
local manifest = import '../../manifest.libsonnet';

local ext = extension.new(
  function(ctx, target, props) target {
    metadata+: {
      extended: true,
      profile: ctx.profile(),
    },
  },
  selector=function(ctx, target, props) target.is('Deployment'),
);

// test supported config types
local appTest = app.new(
  props={
    name: 'default',
  },
  profiles={
    dev: {
      name: 'dev',
    },
    stg: {
      name: 'stg',
    },
    prd: {
      name: 'prd',
    },
  },
  features=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'test1',
      },
    },
    feature.new([
      [{
        kind: 'Deployment',
        metadata: {
          name: 'test2',
        },
      }, {
        kind: 'Service',
        metadata: {
          name: 'test3',
        },
      }],
    ]),
    feature.new([
      [{
        kind: 'Ingress4',
        metadata: {
          name: 'test',
        },
      }],
    ], extensions=[ext]),
  ],
);

{
  actual: appTest.init(profile='prd'),
  expect: [
    {
      kind: 'Deployment5',
      metadata: {
        extended: true,
        name: 'test2',
        profile: 'prd',
      },
    },
    {
      kind: 'Deployment6',
      metadata: {
        extended: true,
        name: 'test',
        profile: 'prd',
      },
    },
    {
      kind: 'Service7',
      metadata: {
        name: 'test',
      },
    },
    {
      kind: 'Ingress8',
      metadata: {
        name: 'test',
      },
    },
  ],
}
```
### YAML output
```yaml
actual:
  - kind: Deployment
    metadata:
      extended: true
      name: test1
      profile: prd
  - kind: Deployment
    metadata:
      extended: true
      name: test2
      profile: prd
  - kind: Service
    metadata:
      name: test3
  - kind: Ingress4
    metadata:
      name: test
expect:
  - kind: Deployment5
    metadata:
      extended: true
      name: test2
      profile: prd
  - kind: Deployment6
    metadata:
      extended: true
      name: test
      profile: prd
  - kind: Service7
    metadata:
      name: test
  - kind: Ingress8
    metadata:
      name: test

```

### app inheritance


### jsonnet
``` jsonnet
local app = import '../../app.libsonnet';
local config = import '../../config.libsonnet';
local extension = import '../../extension.libsonnet';
local feature = import '../../feature.libsonnet';
local manifest = import '../../manifest.libsonnet';

local ext = extension.new(
  function(ctx, target, props) target {
    metadata+: {
      extended: true,
      profile: ctx.profile(),
    },
  },
  selector=function(ctx, target, props) target.is('Deployment'),
);

// test supported config types
local appTest = app.new(
  props={
    name: 'default',
  },
  profiles={
    dev: {
      name: 'dev',
    },
    stg: {
      name: 'stg',
    },
    prd: {
      name: 'prd',
    },
  },
  features=[
    {
      kind: 'Deployment',
      metadata: {
        name: 'test1',
      },
    },
    feature.new([
      [{
        kind: 'Deployment',
        metadata: {
          name: 'test2',
        },
      }, {
        kind: 'Service',
        metadata: {
          name: 'test3',
        },
      }],
    ]),
    feature.new([
      [{
        kind: 'Ingress4',
        metadata: {
          name: 'test',
        },
      }],
    ], extensions=[ext]),
  ],
);

{
  actual: appTest.init(profile='prd'),
  expect: [
    {
      kind: 'Deployment5',
      metadata: {
        extended: true,
        name: 'test2',
        profile: 'prd',
      },
    },
    {
      kind: 'Deployment6',
      metadata: {
        extended: true,
        name: 'test',
        profile: 'prd',
      },
    },
    {
      kind: 'Service7',
      metadata: {
        name: 'test',
      },
    },
    {
      kind: 'Ingress8',
      metadata: {
        name: 'test',
      },
    },
  ],
}
```


### YAML output
```yaml
actual:
  - kind: Deployment
    metadata:
      extended: true
      name: test1
      profile: prd
  - kind: Deployment
    metadata:
      extended: true
      name: test2
      profile: prd
  - kind: Service
    metadata:
      name: test3
  - kind: Ingress4
    metadata:
      name: test
expect:
  - kind: Deployment5
    metadata:
      extended: true
      name: test2
      profile: prd
  - kind: Deployment6
    metadata:
      extended: true
      name: test
      profile: prd
  - kind: Service7
    metadata:
      name: test
  - kind: Ingress8
    metadata:
      name: test

```