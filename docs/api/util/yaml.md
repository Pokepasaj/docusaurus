---
id: api-util-yaml
title: yaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `yaml`

## Table of Contents
- [`yaml`](#yaml)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Parses a YAML string with optional templating. Supports returning a single document or an array of documents.

### Parameters
- **`str`** - (string): The YAML string to parse.
- **`props`** - (object, optional): The properties to use for templating. Defaults to an empty object.
- **`single`** - (boolean, optional): Whether to return a single document if only one is present. Defaults to `true`.
- **`template`** - (boolean, optional): Whether to apply templating to the string. Defaults to `true`.

### Return Value
Returns the parsed YAML document(s). If `single` is true and there is only one document, returns a single document; otherwise, returns an array of documents.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local yamlString = "apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n";

    util.yaml(yamlString, { name: 'nginx' })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "apiVersion": "v1",
       "kind": "Pod",
       "metadata": {
          "name": "nginx"
       }
    }
    ```
  </TabItem>
</Tabs>

### Example 2
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local yamlStrings = [
      "apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n",
      "apiVersion: v1\nkind: Service\nmetadata:\n  name: %(name)s\n"
    ];

    util.yaml(yamlStrings, { name: 'nginx' })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
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
    [
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
    ```
  </TabItem>
</Tabs>