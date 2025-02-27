---
id: api-extensions-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `new`

## Table of Contents
- [`new`](#new)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `new` function is used to create a new extension that can modify or generate Kubernetes resources. This function allows users to define how an extension transforms or adds configurations to a given manifest.

## Parameters
- **`render`** - (function) A function that defines how the extension transforms the selected Kubernetes resources.
- **`selector`** - (function, optional) A function that filters which resources should be affected by the extension.
- **`extends`** - (object, optional) An existing manifest or extension that this new extension should build upon.

## Return Value
Returns an object containing the transformed or newly generated Kubernetes resources based on the provided render function.

## Usage Examples


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local ext = import '../../vendor/konn/extension.libsonnet';
    local helper = import '../../vendor/konn/helpers.libsonnet';

    local testExt = ext.new(
      function(ctx, config, props)
        [
          {
            kind: 'Deployment',
            metadata: {
              name: 'nginx',
            },
          },
          {
            kind: 'Deployment',
            metadata: {
              name: 'flask',
            },
          },
        ],
    );

    {
      testExt: testExt.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    body:
    apiVersion: v1
    kind: Service
    metadata:
      name: default
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "body": {
        "apiVersion": "v1",
        "kind": "Service",
        "metadata": {
            "name": "default"
        }
      }
    }
    ```
    </TabItem>
</Tabs>
