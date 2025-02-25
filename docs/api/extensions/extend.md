---
id: api-extensions-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview



### Parameters

### Return Value
The function returns an object with:
- **`body`** – 

## Usage Examples


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local ext = import '../../vendor/konn/extension.libsonnet';
    local helper = import '../../vendor/konn/helpers.libsonnet';

    // Define the base extension
    local baseExt = ext.new(
      // Render function returning Kubernetes Deployments
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
    ).extend(
      render=function(ctx, config, props)

        {
          kind: 'Deployment',
          metadata: {
            name: 'kong',
          },
        },
    );
    {
      output: baseExt.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      kind: Deployment
      metadata:
        name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "kind": "Deployment",
          "metadata": {
             "name": "kong"
          }
       }
    }
    ```
    </TabItem>
</Tabs>