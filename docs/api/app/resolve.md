---
id: api-app-resolve
title: resolve
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
        {
          kind: 'Deployment',
          metadata: {
            name: 'flask',
          },
        },
      ],
    );

    {
      output: myApp.resolve(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - body:
          kind: Deployment
          metadata:
            name: nginx
      - body:
          kind: Deployment
          metadata:
            name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "flask"
                }
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>
