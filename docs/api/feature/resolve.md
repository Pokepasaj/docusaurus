---
id: api-feature-resolve
title: resolve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `resolve`

## Table of Contents
- [`resolve`](#resolve)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `resolve` function resolves individual configurations, processes extensions, and applies any necessary filtering and mapping to produce the final configurations.

### Parameters
- **`ctx`** - (object) The context in which the configuration is resolved.
- **`props`** - (object) The properties that influence the resolution of the configuration.

### Return Value
The resolved configurations, including any extensions or transformations applied, in a flat array.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

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
      resolve: testFeature.resolve(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    resolve:
      - body:
          kind: Namespace
          metadata:
            name: foo
          type: config1
      - body:
          kind: Namespace2
          metadata:
            name: bar
          type: config2

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "resolve": [
          {
             "body": {
                "kind": "Namespace",
                "metadata": {
                   "name": "foo"
                },
                "type": "config1"
             }
          },
          {
             "body": {
                "kind": "Namespace2",
                "metadata": {
                   "name": "bar"
                },
                "type": "config2"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>