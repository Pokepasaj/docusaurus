---
id: api-helpers-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `render`

## Table of Contents
- [`render`](#render)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
Renders a target with a context and properties. Mostly used for testing.

## Parameters
- **`target`** - (any) The target to render.
- **`props`** - (object, optional) Additional properties to pass to the target. Defaults to an empty object.

## Return Value
Returns the rendered target or the target itself if it's not renderable.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';
    local config = import '../../vendor/konn/config.libsonnet';

    local myConfig = config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    });

    {
      output: helpers.render(myConfig, { replicas: 3 }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": {
        "kind": "Deployment",
        "metadata": {
          "name": "nginx"
        }
      }
    }
    ```
  </TabItem>
</Tabs>