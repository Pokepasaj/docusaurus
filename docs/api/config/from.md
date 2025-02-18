---
id: api-config-from
title: from
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The `from` function is used for conversions in Konn. Every type has a way of converting a plain object into its own type. If the object is already of the correct type, `from` simply returns it unchanged.

This enables seamless use of plain objects and functions throughout your code, allowing Konn to automatically infer the correct type.


### How It Works

- If the input is not already a Konn type, it will be converted into the appropriate type.

- If the input is already a valid Konn type, it is returned as is.

**Priority Rule:**  
 When `from` is called, it first looks for a render function on the object. If one is present, it uses that function first to determine the type.
:::tip FYI
When resolving `from`, Konn will prioritize a render function if one is available.
:::

### Basic Usage
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
    ```yml
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
