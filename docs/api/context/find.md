---
id: api-context-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `find`

## Table of Contents
- [`find`](#find)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
    - [Usage Example](#usage-example)

## Overview
Finds the first configuration in the context's manifest that matches the specified test function.

## Parameters
- **`test`** - (function) A function that takes a configuration object and returns a boolean indicating whether the configuration matches the test.

## Return Value
Returns the first configuration that matches the test function, or `null` if no match is found.

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

    // Find the first Deployment in the manifest
    local foundDeployment = initialCtx.find(
      function(config) config.kind == 'Deployment'
    );

    {
      foundDeployment: foundDeployment,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    foundDeployment:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "foundDeployment": {
          "kind": "Deployment",
          "metadata": {
            "name": "nginx"
          }
      }
    }
    ```  
    </TabItem>
</Tabs>