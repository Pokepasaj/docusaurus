---
id: api-context-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `filter`

## Table of Contents
- [`filter`](#filter)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
    - [Usage Example](#usage-example)

## Overview
Filters the manifests in the context using a specified function.

## Parameters
- **`func`** - (function) A function that takes a configuration object and returns a boolean indicating whether the configuration should be included in the filtered manifest.

## Return Value
Returns an array of configurations that match the filter function

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

    // Filter the manifest to include only Deployments
    local filteredManifest = initialCtx.filter(
      function(config) config.kind == 'Deployment'
    );

    {
      filteredManifest: filteredManifest,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    filteredManifest:
      - kind: Deployment
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "filteredManifest": [
          {
            "kind": "Deployment",
            "metadata": {
                "name": "nginx"
            }
          }
      ]
    }
    ```  
    </TabItem>
</Tabs>