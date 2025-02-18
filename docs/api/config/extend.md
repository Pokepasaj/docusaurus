---
id: api-config-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `extend` function allows you to take an existing configuration and extend it by adding or modifying properties. It’s useful for creating new configurations based on an existing template, applying additional settings to it.
### Parameters
- **`config`** -  (function)  A function that takes `ctx`, `config`, and `props`, and returns a modified configuration.
- **`props`** - (object) The properties to be passed to the extended configuration.

### Return Value
The `extend` function returns a new configuration object, combining the original configuration with the modifications provided in the extension.
## Usage Examples

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
`extend` doesn’t include the `props` in the extended configuration. To modify the `props`, you can use [Override](api-config-override)
:::

