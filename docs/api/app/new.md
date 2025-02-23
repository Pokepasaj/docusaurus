---
id: api-app-new
title: new
---
This module handles application configurations, allowing for the creation and rendering of configurations through multiple stages.

`new` module creates a new manifest

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
      output: myApp.render(),
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
