---
id: api-manifest-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `extend`

## Table of Contents
- [`extend`](#extend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `extend` function creates a new manifest by extending the current one with a new render function, props, filter, or map functions. It allows modifying the behavior of an existing manifest. It does the same thing as [extend from config](/api/config/api-config-extend) except it obeys all the manifest rules.

### Parameters
- **`render`** - (function) A new render function to replace or extend the original one.
- **`props`** - (object): The properties used for extending the manifest.
- **`filter`** - (function) A filter function applied to the manifest's configurations.
- **`map`** - (function): A map function applied to the manifest's configurations.

### Return Value
Returns a new manifest with the provided extensions applied.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [{
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      }], {
        name: 'flask',
      }
    ).extend(
      function(ctx, manifest, props) (
        manifest + [  // we add the Deployment flask to Deployment nginx
          {
            kind: 'Deployment',
            metadata: {
              name: props.name,
            },
          },
        ]
      )
    );

    {
      output: testManifest.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>

### Example 2
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [{
        kind: 'Service',
        metadata: {
          name: 'nginx',
        },
      }], {
        name: 'flask',
      }
    ).extend(
      function(ctx, manifest, props) (
        manifest + [  // we add the Service flask to Service nginx
          {
            kind: 'Service',
            metadata: {
              name: props.name,
            },
          },
        ]
      )
    );

    {
      output: testManifest.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      - kind: Service
        metadata:
          name: nginx
      - kind: Service
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Service",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>