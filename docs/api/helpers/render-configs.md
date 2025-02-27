---
id: api-helpers-render-configs
title: render-configs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `renderConfigs`

## Table of Contents
- [`renderConfigs`](#renderconfigs)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
Renders a list of configurations with the provided context and properties.

## Parameters
- **`ctx`** - (object) The context in which the configurations are rendered. Defaults to a new context.
- **`configs`** - (array) The configurations to render. Defaults to an empty array.
- **`props`** - (object, optional) Additional properties to pass to the configurations. Defaults to an empty object.

## Return Value
Returns an array of rendered configurations.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';
    local context = import '../../vendor/konn/context.libsonnet';
    local config = import '../../vendor/konn/config.libsonnet';

    local ctx = context.new({
      env: 'production'
    });

    local configs = [
      config.new(function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      }),
      config.new(function(ctx, props) {
        kind: 'Service',
        metadata: {
          name: 'nginx-service',
        },
      }),
    ];

    local renderedConfigs = helpers.renderConfigs(ctx, configs);
    {
      output: renderedConfigs,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Service
        metadata:
          name: nginx-service
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
          },
          {
             "kind": "Service",
             "metadata": {
                "name": "nginx-service"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>