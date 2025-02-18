---
id: api-config-extend
title: extend
---

Let's say you made a reasonable config and you just want to use it as a template.  
In this example, you can get extend it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import 'konn/config.libsonnet';

    local testConfig = config.new(function(ctx, props) {
    kind: 'Deployment',
    metadata: {
        name: props.name,
    },
    }, {
    name: 'test',
    }).extend(
    function(ctx, config, props) (
        config {
        extended: true,
        }
    ), {
        name: 'nginx',
    }
    );

    {
    output: testConfig.render(),

    }

    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
    extended: true
    kind: Deployment
    metadata:
        name: nginx

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": {
        "extended": true,
        "kind": "Deployment",
        "metadata": {
            "name": "nginx"
        }
    }
    }
    ```
   </TabItem>
</Tabs>
 


:::tip Add Config
extending does not include the props when you do it but that is why we use [Override](api-config-override)
:::

