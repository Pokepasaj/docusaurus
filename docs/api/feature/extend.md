---
id: api-feature-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `extend` function allows for the extension of an existing feature by adding new configurations, properties, or extensions, as well as modifying the filtering and mapping behavior.
### Parameters
- **`configs`** - (array) Additional configurations to extend the feature.
- **`props`** - (object) Additional properties to extend the feature.
- **`extensions`** - (array)  Additional extensions to apply to the feature.
- **`filter`** - (function) A filter function to refine which configurations are included.
- **`map`** - (function) A map function to modify the configurations.
### Return Value
A new feature object with the extended configurations, properties, and extensions.

## Usage Examples
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
        local config = import '../../vendor/konn/config.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
    [{
        kind: 'config',
        metadata: {
        name: 'one',
        },
    },
    ], {
        name: 'two',
        adding_here: 'makes NO difference'
    }
    ).extend(
    [
        config.new(function(ctx, props) {
        kind: 'config',
        metadata: {
            name: props.name,
        },
        }
        {
            name: 'random',
            adding_here: 'makes a difference'
        }),
    ]
    );

    {
    output: testFeature.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
    - kind: config
        metadata:
        name: one
    - adding_here: makes a difference
        kind: config
        metadata:
        name: two
        name: random
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": [
        {
            "kind": "config",
            "metadata": {
                "name": "one"
            }
        },
        {
            "adding_here": "makes a difference",
            "kind": "config",
            "metadata": {
                "name": "two"
            },
            "name": "random"
        }
    ]
    }
    ```  
    </TabItem>
</Tabs>