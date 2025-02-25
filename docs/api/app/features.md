---
id: api-app-features
title: features
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `features` function retrieves and filters the list of features defined in the application manifest.
### Parameters
- **`config`** -  
### Return Value
An array of filtered features that match the provided properties.
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
      myApp: myApp,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    myApp:
      body:
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
       "myApp": {
          "body": [
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
    }
    ```  
    </TabItem>
</Tabs>
