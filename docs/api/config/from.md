---
id: api-config-from
title: from
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


`From` is used for conversions and every type has some way of converting a plane object into its own type, or if it's already of its own type, it will return it.

If you already have a config and you pass it into `from`, it's just going to return the same thing.

It basically means you can use plain objects and functions anywhere throughout the code and it will automatically determine roughly what it should be.

:::tip FYI
when its looking for `from` it will prioritize a render function and it will use it first
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local k = import 'konn/main.libsonnet';

    local svc = {
        type: 'Service',
    };

    local deploy = {
        render(ctx, props):: {
        type: 'Deployment',
        },
    };
    local example = k.lib.config.from(deploy);


    {
        svc_output: svc,
        deploy_output: deploy,
        from_example: example,
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    deploy_output: {}
    from_example:
    body:
        type: Deployment
    svc_output:
    type: Service

    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "deploy_output": { },
    "from_example": {
        "body": {
            "type": "Deployment"
        }
    },
    "svc_output": {
        "type": "Service"
    }
    }

    ```
  </TabItem>
</Tabs>
