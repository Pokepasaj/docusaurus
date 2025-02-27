---
id: api-manifest-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `fromYaml`

## Table of Contents
- [`fromYaml`](#fromyaml)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `fromYaml` function creates a manifest from a YAML string or array of YAML strings. It parses the YAML and generates configurations based on it.

### Parameters
- **`yaml`** - (string | array) The YAML source to create the manifest from.
- **`props`** - (object) The properties to apply to the manifest.
- **`filter`** - (function) The filter function applied to the generated configurations.
- **`map`** - (function) The map function applied to the generated configurations.

### Return Value
Returns a new manifest object created from the YAML source.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    manifest.fromYaml('apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n', {
      name: 'nginx',
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "apiVersion": "v1",
             "kind": "Pod",
             "metadata": {
                "name": "nginx"
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

    manifest.fromYaml([
      'apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n',
      'apiVersion: v1\nkind: Service\nmetadata:\n  name: %(name)s\n'
    ], {
      name: 'nginx',
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
      - apiVersion: v1
        kind: Service
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "apiVersion": "v1",
             "kind": "Pod",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "apiVersion": "v1",
             "kind": "Service",
             "metadata": {
                "name": "nginx"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>