---
id: api-manifest-render
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
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `render` function generates the final manifest configurations by resolving all the props and contexts. It calls the `resolve` function to gather the configurations and then processes them using the `lib.renderConfigs` function, which ensures the configurations are properly rendered.

### Parameters
- **`ctx`** - (context) The context object, created using the provided props and config.
- **`props`** - (object): The properties used in the render process.

### Return Value
Returns the rendered configurations by applying the `lib.renderConfigs` function to the resolved configs.

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