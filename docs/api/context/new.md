---
id: api-context-new
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
    - [Usage Example](#usage-example)

## Overview
Creates a new context object with the specified properties, manifest, and metadata.

## Parameters
- **`props`** - (object) The properties to include in the context.
- **`manifest`** - (array) The manifest to include in the context.
- **`metadata`** - (object) The metadata to include in the context.

## Return Value
Returns a new context object.


### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local ctx = import '../../vendor/konn/context.libsonnet';
    local helper = import '../../vendor/konn/helpers.libsonnet';

    local testCtx = ctx.new(
      manifest={
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    );

    {
      rendered: helper.render(testCtx.args.manifest),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    rendered:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "rendered": {
          "kind": "Deployment",
          "metadata": {
            "name": "nginx"
          }
      }
    }
    ```  
    </TabItem>
</Tabs>