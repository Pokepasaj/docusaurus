---
id: api-feature-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `new` function initializes a new feature with a set of configurations, properties, and extensions. It also provides functionality to apply filters and maps to customize the configuration.
### Parameters
- **`configs`** - (array) The configurations to be applied to the feature.
- **`props`** - (object) The properties that define the behavior of the feature.
- **`extensions`** - (array) Optional extensions to be applied to the feature.
- **`filter`** - (function) A filter function used to determine whether a configuration should be included.
- **`map`** - (function) A map function used to modify configurations.
### Return Value
An object representing the new feature, including its body (rendered configuration), resolved configurations (`configs`), properties, and function arguments.

## Usage Examples
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local helper = import '../../vendor/konn/helpers.libsonnet';

    local testFeature = feature.new(
      [
        {
          type: 'config1',
          kind: 'Namespace',
          metadata: {
            name: 'foo',
          },
        },
        {
          type: 'config2',
          kind: 'Namespace2',
          metadata: {
            name: 'bar',
          },
        },
      ],

    );

    {
      rendered: helper.render(testFeature),  // feature does not have a render function we use helpers to render
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    rendered:
      - kind: Namespace
        metadata:
          name: foo
        type: config1
      - kind: Namespace2
        metadata:
          name: bar
        type: config2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "rendered": [
          {
            "kind": "Namespace",
            "metadata": {
                "name": "foo"
            },
            "type": "config1"
          },
          {
            "kind": "Namespace2",
            "metadata": {
                "name": "bar"
            },
            "type": "config2"
          }
      ]
    }
    ```  
    </TabItem>
</Tabs>