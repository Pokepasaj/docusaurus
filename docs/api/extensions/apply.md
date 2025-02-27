---
id: api-extensions-apply
title: apply
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `apply`

## Table of Contents
- [`apply`](#apply)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `apply` function is used to apply an extension to an existing configuration. It allows you to modify or extend a configuration object by passing a base configuration and an extension function that will operate on it. The extension can modify properties of the configuration or add new properties. This function facilitates the composition of configurations by layering multiple modifications.

## Parameters
- **`ctx`** - (Required) The context to be passed to the function. This is usually created using `context.new()`.
- **`config`** - (Required) The configuration to be modified or extended.
- **`props`** - (Optional) Additional properties to be passed to the function.

## Return Value
Returns a new configuration object that has been modified by the extension. This is a result of applying the extension function to the base configuration and resolving the properties.

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