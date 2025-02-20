---
id: api-app-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

### Parameters
- **`config`** -  
### Return Value

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new(
      features=[
        function(ctx, props) {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
    );

    {
      output: myApp.render(),  // we use render just like anywhere else
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
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
