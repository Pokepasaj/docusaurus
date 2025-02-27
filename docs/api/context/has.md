---
id: api-context-has
title: has
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `has`

## Table of Contents
- [`has`](#has)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
    - [Usage Example](#usage-example)

## Overview
Checks if a configuration exists in the context's manifest by a specified path and matching value.

## Parameters
- **`path`** - (string) The path to the value to match.
- **`test`** - (any) The value to match at the specified path.

## Return Value
Returns `true` if a configuration matches the specified path and value, otherwise `false`.
### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local ctx = import '../../vendor/konn/context.libsonnet';

    local initialCtx = ctx.new(
      manifest=[
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'nginx-service',
          },
        },
      ],
    );

    // Check if a configuration exists by path and value
    local hasConfig = initialCtx.has('metadata.name', 'nginx-service');

    {
      hasConfig: hasConfig,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    hasConfig: true
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "hasConfig": true
    }
    ```  
    </TabItem>
</Tabs>