---
id: api-extensions-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `extend`

## Table of Contents
- [`extend`](#extend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `extend` function is used to modify or extend an existing configuration. It allows you to add new configurations, or change existing configurations, by applying new logic on top of a base configuration. This function is useful for composing multiple configurations or applying reusable extensions.

## Parameters
- **`render`** - (Required) A function that defines how the configuration is modified or extended. The render function takes in the `ctx` (context), the `config` (existing configuration), and the `props` (properties passed to the extension) and returns the modified configuration.

## Return Value
Returns a new configuration object that includes the extended configuration, modified according to the logic in the `render` function.

## Usage Examples


<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local ext = import '../../vendor/konn/extension.libsonnet';
    local helper = import '../../vendor/konn/helpers.libsonnet';

    // Define the base extension
    local baseExt = ext.new(
      // Render function returning Kubernetes Deployments
      function(ctx, config, props)
        [
          {
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
    ).extend(
      render=function(ctx, config, props)

        {
          kind: 'Deployment',
          metadata: {
            name: 'kong',
          },
        },
    );
    {
      output: baseExt.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      kind: Deployment
      metadata:
        name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "kind": "Deployment",
          "metadata": {
             "name": "kong"
          }
       }
    }
    ```
    </TabItem>
</Tabs>