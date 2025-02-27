---
id: api-extensions-configure
title: configure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `configure`

## Table of Contents
- [`configure`](#configure)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `configure` function is an alias to [override](api-extensions-override).

## Parameters
- **`props`** - (Required) A function or an object that takes the current properties of the configuration and returns the modified properties. This allows dynamic configuration updates.

## Return Value
Returns a new configuration with the updated properties, reflecting the changes made through the `configure` function.

## Usage Examples

<Tabs>
     <TabItem value="jsonnet" label="Jsonnet" default>
    ``` js
    local extension = import '../../vendor/konn/extension.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_nginx,
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: props.name_flask,
          },
        },
      ],
      {
        name_nginx: 'placeholder',  
        name_flask: 'placeholder',
      }
    ).configure(function(props) {
      name_nginx: 'nginx-app',  // Overriding placeholders
      name_flask: 'flask-app',
    });

    {
      output: testManifest.render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx-app
      - kind: Deployment
        metadata:
          name: flask-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "name": "flask-app"
             }
          }
       ]
    }
    ```
    </TabItem>
</Tabs>