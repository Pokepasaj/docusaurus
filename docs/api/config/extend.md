---
id: api-config-extend
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
    - [Merging](#merging)

## Overview
The `extend` function allows you to take an existing configuration and extend it by adding or modifying properties. It’s useful for creating new configurations based on an existing template, applying additional settings to it.

## Parameters
- **`fn`** - (function) A function that takes `ctx`, `config`, and `props`, and returns a modified configuration.
- **`props`** - (object) The properties to be passed to the extended configuration.

## Return Value
The `extend` function returns a new configuration object, combining the original configuration with the modifications provided in the extension.


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

### Merging

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import 'konn/config.libsonnet';

    local baseConfig = config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
        labels: {
          app: props.label,
        },
      },
    }, {
      name: 'base-app',
    }).extend(
      function(ctx, config, props) (
        config {
          metadata+: {
            annotations: {
              'devops.com': 'team-devops',
            },
            labels+: {
              env: props.env,
            },
          },
        }
      ), {
        name: 'extended-app',
        env: 'staging',
        label: 'some-label',
      }
    );

    {
      output: baseConfig.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      kind: Deployment
      metadata:
        annotations:
          devops.com: team-devops
        labels:
          app: some-label
          env: staging
        name: extended-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "kind": "Deployment",
          "metadata": {
             "annotations": {
                "devops.com": "team-devops"
             },
             "labels": {
                "app": "some-label",
                "env": "staging"
             },
             "name": "extended-app"
          }
       }
    }
    ```
   </TabItem>
</Tabs>
 
