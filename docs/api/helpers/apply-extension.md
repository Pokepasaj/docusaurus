---
id: api-helpers-apply-extension
title: apply-extension
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



# `applyExtensions`

## Table of Contents
- [`applyExtensions`](#applyextensions)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
Applies a list of extensions to a list of configurations using the provided context and properties.

## Parameters
- **`extensions`** - (array) An array of extensions to apply.
- **`ctx`** - (object) The context to use when applying the extensions.
- **`configs`** - (array) An array of configurations to which the extensions will be applied.
- **`props`** - (object, optional) Additional properties to pass to the extensions. Defaults to an empty object.

## Return Value
Returns an array of configurations with the extensions applied.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local helpers = import '../../vendor/konn/helpers.libsonnet';
  local context = import '../../vendor/konn/context.libsonnet';
  local config = import '../../vendor/konn/config.libsonnet';
  local extension = import '../../vendor/konn/extension.libsonnet';

  local ctx = context.new({
    env: 'production'
  });

  local baseConfig = config.new(
    function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: 'base-app',
      },
    },
  );

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

  local extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);
  {
    output: extendedConfigs,
  }
  ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
  ```yaml
  output:
    - kind: Deployment
      metadata:
        labels:
          app: extended-app
        name: base-app
  ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
  ```json
  {
     "output": [
        {
           "kind": "Deployment",
           "metadata": {
              "labels": {
                 "app": "extended-app"
              },
              "name": "base-app"
           }
        }
     ]
  }
  ```
  </TabItem>
</Tabs>