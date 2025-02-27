---
id: api-manifest-fromJson
title: fromJson
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `fromJson`

## Table of Contents
- [`fromJson`](#fromjson)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `fromJson` function creates a manifest from a JSON string or array of JSON strings. It parses the JSON and generates configurations based on it.

### Parameters
- **`json`** - (string | array) The JSON source to create the manifest from.
- **`props`** - (object) The properties to apply to the manifest.
- **`filter`** - (function) The filter function applied to the generated configurations.
- **`map`** - (function) The map function applied to the generated configurations.

### Return Value
Returns a new manifest object created from the JSON source.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    manifest.fromJson('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}', {
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

    manifest.fromJson([
      '{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}',
      '{"apiVersion":"v1", "kind":"Service", "metadata":{"name": "%(name)s"}}'
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