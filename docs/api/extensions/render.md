---
id: api-extensions-render
title: render
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
    testExt:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "testExt": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>