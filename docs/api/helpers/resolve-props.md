---
id: api-helpers-resolve-props
title: resolve-props
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `resolveProps`

## Table of Contents
- [`resolveProps`](#resolveprops)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
Merges properties with target defaults and applies overrides.

## Parameters
- **`target`** - (object) The target object with default properties.
- **`props`** - (object, optional) Additional properties to merge with the target's properties. Defaults to an empty object.

## Return Value
Returns the merged properties with overrides applied.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local helpers = import '../../vendor/konn/helpers.libsonnet';
    local config = import '../../vendor/konn/config.libsonnet';

    local myConfig = config.new(function(ctx, props) {
      kind: 'Deployment',
      metadata: {
        name: props.name,
      },
    }, {
      name: 'default-name',
    });

    local mergedProps = helpers.resolveProps(myConfig, { name: 'custom-name' });
    {
      output: mergedProps,
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      name: custom-name
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": {
        "name": "custom-name"
      }
    }
    ```
  </TabItem>
</Tabs>