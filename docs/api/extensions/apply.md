---
id: api-extensions-apply
title: apply
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
    local config = import '../../vendor/konn/config.libsonnet';
    local context = import '../../vendor/konn/context.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';

    // Define the base config
    local baseConfig = config.new(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'base-app',
        },
      },
    );

    // Define the extension
    local myExtension = extension.new(
      render=function(ctx, config, props)
        config {
          metadata+: {
            labels: {
              app: props.label,
            },
          },
        },
      props={
        label: 'extended-app',
      },
    );

    // Apply the extension to the base config
    local extendedConfig = myExtension.apply(
      ctx=context.new(),
      config=baseConfig,
      props={ label: 'extended-app' },
    );

    {
      output: baseConfig.render(),
      extendedConfigRendered: lib.renderConfigs(
        context.new(), [extendedConfig]
      ),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    extendedConfigRendered:
      - kind: Deployment
        metadata:
          labels:
            app: extended-app
          name: base-app
    output:
      kind: Deployment
      metadata:
        name: base-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "extendedConfigRendered": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "extended-app"
                },
                "name": "base-app"
             }
          }
       ],
       "output": {
          "kind": "Deployment",
          "metadata": {
             "name": "base-app"
          }
       }
    }
    ```
    </TabItem>
</Tabs>