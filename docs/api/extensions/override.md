---
id: api-extensions-override
title: override
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
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_nginx,
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_flask,
          },
        },
      ],
      {
        name_nginx: 'placeholder',  // Keeping placeholders
        name_flask: 'placeholder',
      }
    ).override(function(props) {
      name_nginx: 'nginx-app',  // Overriding placeholders
      name_flask: 'flask-app',
    });

    {
      output: testManifest.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx-app
      - kind: Deployment
        metadata:
          name: flask-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask-app"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>