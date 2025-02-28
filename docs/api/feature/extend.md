---
id: api-feature-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `extend` function allows for the extension of an existing feature by adding new configurations, properties, or extensions, as well as modifying the filtering and mapping behavior.

## Parameters
- **`configs`** - (array) Additional configurations to extend the feature. See [configs](#example-with-configs).
- **`props`** - (object) Additional properties to extend the feature. See [props](#example-with-props).
- **`extensions`** - (array) Additional extensions to apply to the feature. See [extensions](#example-with-extensions).
- **`filter`** - (function) A filter function to refine which configurations are included. See [filter](#example-with-filter).
- **`map`** - (function) A map function to modify the configurations. See [map](#example-with-map).

## Return Value
A new feature object with the extended configurations, properties, and extensions.

## Usage Examples

### Example with configs
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local config = import '../../vendor/konn/config.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';

local testFeature = feature.new(
  [
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-svc',
      },
    },
  ], {
    name: 'flask-svc',
  }
).extend(
  [
    config.new(
      function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: props.name,
        },
      },
    ),
  ]);

testFeature.render()
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Service
  metadata:
    name: nginx-svc
- kind: Service
  metadata:
    name: flask-svc
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Service",
      "metadata": {
         "name": "nginx-svc"
      }
   },
   {
      "kind": "Service",
      "metadata": {
         "name": "flask-svc"
      }
   }
]
```  
  </TabItem>
</Tabs>

### Example with props
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local feature = import '../../vendor/konn/feature.libsonnet';
local helper = import '../../vendor/konn/helpers.libsonnet';

local testFeature = feature.new([
    {
      kind: 'Service',
      metadata: {
        name: 'nginx-svc',
      },
    },
  ]
).extend(
  [
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
  ],
  {
    additionalProp1: 'value1',
    additionalProp2: 'value2',
  });

testFeature.props
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
additionalProp1: value1
additionalProp2: value2
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
{
   "additionalProp1": "value1",
   "additionalProp2": "value2"
}
```  
  </TabItem>
</Tabs>

### Example with [extensions](/api/feature/api-feature-extensions)
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local extension = import '../../vendor/konn/extension.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';
local helper = import '../../vendor/konn/helpers.libsonnet';

local testExt = extension.new(
  function(ctx, config, props) config {
    metadata+: {
      labels: {
        app: 'extended-config',
      },
    },
  });

local testFeature = feature.new(
  [
    {
      kind: 'config',
      metadata: {
        name: 'one',
      },
    },
  ]
).extend(
  [
    {
      kind: 'config',
      metadata: {
        name: 'two',
      },
    },
  ],
  {},
  [testExt]
);

helper.render(testFeature)
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: config
  metadata:
    labels:
      app: extended-config
    name: one
- kind: config
  metadata:
    labels:
      app: extended-config
    name: two
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "config",
      "metadata": {
         "labels": {
            "app": "extended-config"
         },
         "name": "one"
      }
   },
   {
      "kind": "config",
      "metadata": {
         "labels": {
            "app": "extended-config"
         },
         "name": "two"
      }
   }
]
```  
  </TabItem>
</Tabs>

### Example with [filter](/api/feature/api-feature-filter)
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local feature = import '../../vendor/konn/feature.libsonnet';
local helper = import '../../vendor/konn/helpers.libsonnet';

local testFeature = feature.new([
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Service',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Deployment',
      metadata: {
        name: 'flask',
      },
    },
  ]
).extend(
  [
    {
      kind: 'Service',
      metadata: {
        name: 'flask',
      },
    },
  ],
  {},
  [],
  filter=function(ctx, config, props) config.get('metadata').name != 'flask'
);

helper.render(testFeature)
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    name: nginx
- kind: Service
  metadata:
    name: nginx
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Deployment",
      "metadata": {
         "name": "nginx"
      }
   },
   {
      "kind": "Service",
      "metadata": {
         "name": "nginx"
      }
   }
]
```  
  </TabItem>
</Tabs>

### Example with [map](/api/feature/api-feature-map)
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    
```js
local config = import '../../vendor/konn/config.libsonnet';
local feature = import '../../vendor/konn/feature.libsonnet';
local helper = import '../../vendor/konn/helpers.libsonnet';

local testFeature = feature.new([
    {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    },
    {
      kind: 'Deployment',
      metadata: {
        name: 'flask',
      },
    },
  ]
).extend(
  [
    config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
      },
    }),
  ],
  {
    name: 'kong',
  },
  map=function(ctx, config, props) config {
    metadata+: {
      name: config.metadata.name + '-deployment',
    },
  });

helper.render(testFeature)
```

  </TabItem>
  <TabItem value="yaml" label="YAML Output">

```yaml
- kind: Deployment
  metadata:
    name: nginx-deployment
- kind: Deployment
  metadata:
    name: flask-deployment
- kind: Deployment
  metadata:
    name: kong-deployment
```

  </TabItem>
  <TabItem value="json" label="JSON Output">
    
```json
[
   {
      "kind": "Deployment",
      "metadata": {
         "name": "nginx-deployment"
      }
   },
   {
      "kind": "Deployment",
      "metadata": {
         "name": "flask-deployment"
      }
   },
   {
      "kind": "Deployment",
      "metadata": {
         "name": "kong-deployment"
      }
   }
]
```  
  </TabItem>
</Tabs>