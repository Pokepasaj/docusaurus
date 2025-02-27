---
id: api-manifest-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `new`

## Table of Contents
- [`new`](#new)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `new` function creates a new manifest object. It initializes the manifest with a provided render function, props, filter, and map functions. This function sets up the context and resolves any defaults or properties before rendering the manifest.

### Parameters
- **`render`** - (function) A render function that defines how the manifest is generated. It accepts ctx and props as arguments and should return an array of config objects.
- **`props`** - (object) The properties used in the rendering process. This allows customization and overrides for the generated manifest.
- **`filter`** - (function) A function that filters the generated configurations. It receives ctx, config, and props as arguments and should return a boolean value.
- **`map`** - (function) A function that maps over the generated configurations, allowing modifications to each config. Receives ctx, config, and props as arguments. 

:::note
- render defaults to an empty array.
- filter default function returns true (no filtering).
- map default function returns the config unchanged.
:::

### Return Value
Returns a new manifest object with the following structure:

- **`body`** - The result of the render function, containing the generated configurations.
- **`configs`** - The resolved configurations from the resolve function.
- **`props`** - The properties passed to the function.
- **`args`** - Contains the render function, props, filter, and map functions for further customization.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: props.name,
          },
        },
      ],
      {
        name: 'flask',
      },
    );

    {
      output: testManifest.render(),  // without render we can't display the output
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
      - kind: Deployment
        metadata:
          name: flask
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
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>

### Example 2
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [
        {
          kind: 'Service',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: props.name,
          },
        },
      ],
      {
        name: 'flask',
      },
    );

    {
      output: testManifest.render(),  // without render we can't display the output
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      - kind: Service
        metadata:
          name: nginx
      - kind: Service
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Service",
             "metadata": {
                "name": "nginx"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "name": "flask"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>