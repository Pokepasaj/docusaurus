---
id: api-util-template
title: template
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `template`

## Table of Contents
- [`template`](#template)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Processes a string template with the provided properties, removing lines where properties are null to maintain formatting.

### Parameters
- **`str`** - (string): The string template to process.
- **`props`** - (object, optional): The properties to use for templating. Defaults to an empty object.

### Return Value
Returns the processed string with lines containing null properties removed.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local templateString = "apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n  namespace: %(namespace)s\n";

    util.template(templateString, { name: 'nginx', namespace: 'default' })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "apiVersion": "v1",
       "kind": "Pod",
       "metadata": {
          "name": "nginx",
          "namespace": "default"
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

    local templateString = "apiVersion: v1\nkind: Pod\nmetadata:\n  name: %(name)s\n  namespace: %(namespace)s\n";

    util.template(templateString, { name: 'nginx' })  // namespace is null, so the line is removed
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