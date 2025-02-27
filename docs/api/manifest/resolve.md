---
id: api-manifest-resolve
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
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `resolve` function processes and resolves the individual configurations of the manifest. It evaluates the render function, applies filtering and mapping, and generates the final configurations that meet the specified conditions.

### Parameters
- **`ctx`** - (context) The context object for rendering.
- **`props`** - (object): The properties passed to the `resolve` function.

### Return Value
Returns an array of resolved and filtered configuration objects after applying the filter and map functions.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: props.serviceName,
          },
        },
        {
          kind: 'ConfigMap',
          metadata: {
            name: props.configMapName,
          },
        },
      ],
      {
        serviceName: 'flask-service',
        configMapName: 'flask-config',
      }
    );

    {
      resolvedConfigs: testManifest.resolve(),  // Resolving multiple configs in the manifest
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    resolvedConfigs:
      - body:
          kind: Deployment
          metadata:
            name: nginx
      - body:
          kind: Service
          metadata:
            name: flask-service
      - body:
          kind: ConfigMap
          metadata:
            name: flask-config
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "resolvedConfigs": [
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          {
             "body": {
                "kind": "Service",
                "metadata": {
                   "name": "flask-service"
                }
             }
          },
          {
             "body": {
                "kind": "ConfigMap",
                "metadata": {
                   "name": "flask-config"
                }
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
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: props.serviceName,
          },
        },
        {
          kind: 'ConfigMap',
          metadata: {
            name: props.configMapName,
          },
        },
      ],
      {
        serviceName: 'backend-service',
        configMapName: 'backend-config',
      }
    );

    {
      resolvedConfigs: testManifest.resolve(),  // Resolving multiple configs in the manifest
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    resolvedConfigs:
      - body:
          kind: Deployment
          metadata:
            name: nginx
      - body:
          kind: Service
          metadata:
            name: backend-service
      - body:
          kind: ConfigMap
          metadata:
            name: backend-config
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "resolvedConfigs": [
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          {
             "body": {
                "kind": "Service",
                "metadata": {
                   "name": "backend-service"
                }
             }
          },
          {
             "body": {
                "kind": "ConfigMap",
                "metadata": {
                   "name": "backend-config"
                }
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>

:::note
`resolve` processes all configs inside the manifest.
Unlike [render](api-manifest-resolve), which applies the final transformations for output, `resolve` ensures that multiple configs are properly prepared.

The output includes a list of all configurations that match the given `ctx` and `props`.
:::