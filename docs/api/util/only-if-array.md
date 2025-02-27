---
id: api-util-only-if-array
title: onlyIfArray
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `onlyIfArray`

## Table of Contents
- [`onlyIfArray`](#onlyifarray)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Applies a patch conditionally based on a test. If the test is true, the patch is applied; otherwise, a default value (an empty array) is returned.

### Parameters
- **`test`** - (boolean): The condition to test.
- **`patch`** - (array): The patch to apply if the test is true.
- **`default`** - (array, optional): The default value to return if the test is false. Defaults to an empty array.

### Return Value
Returns the patch if the test is true, otherwise returns the default value (an empty array).

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local patch = [{ kind: 'Deployment', metadata: { name: 'nginx' } }];

    util.onlyIfArray(true, patch)
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Deployment
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
       }
    ]
    ```
  </TabItem>
</Tabs>

### Example 2
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local util = import '../../vendor/konn/util.libsonnet';

    local patch = [{ kind: 'Deployment', metadata: { name: 'nginx' } }];

    util.onlyIfArray(false, patch)
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    []
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    []
    ```
  </TabItem>
</Tabs>