---
id: api-manifest-from
title: from
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `from`

## Table of Contents
- [`from`](#from)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `from` function creates a new manifest from an object, array, or an existing config/renderable object. If the source is already a manifest, it returns the original source.

### Parameters
- **`source`** - (object | array | string | function): The source to create the manifest from.
- **`props`** - (object): The properties to apply to the manifest.
- **`filter`** - (function): The filter function applied to the generated configurations.
- **`maps`** - (function): The map function applied to the generated configurations.

### Return Value
Returns a new manifest object.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local svc = {
      type: 'Service',
      name: 'example',
    };

    local deploy = config.new(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    );

    local manifestFrom = manifest.from(svc);

    {
      render: {
        output: manifestFrom.render(),  // notice this is not rendering the Deployment
        deployment_rendered_separately: deploy,  // we render our deployment separately if we need to 
      },
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render:
      deployment_rendered_separately:
        body:
          kind: Deployment
          metadata:
            name: nginx
      output:
        - name: example
          type: Service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "render": {
          "deployment_rendered_separately": {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          "output": [
             {
                "name": "example",
                "type": "Service"
             }
          ]
       }
    }
    ```
  </TabItem>
</Tabs>

### Example 2
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local config = import '../../vendor/konn/config.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local svc = [
      {
        type: 'Service',
        name: 'example1',
      },
      {
        type: 'Service',
        name: 'example2',
      },
    ];

    local deploy = config.new(
      function(ctx, props) {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    );

    local manifestFrom = manifest.from(svc);

    {
      render: {
        output: manifestFrom.render(),  // notice this is not rendering the Deployment
        deployment_rendered_separately: deploy,  // we render our deployment separately if we need to 
      },
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    render:
      deployment_rendered_separately:
        body:
          kind: Deployment
          metadata:
            name: nginx
      output:
        - name: example1
          type: Service
        - name: example2
          type: Service
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "render": {
          "deployment_rendered_separately": {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          "output": [
             {
                "name": "example1",
                "type": "Service"
             },
             {
                "name": "example2",
                "type": "Service"
             }
          ]
       }
    }
    ```
  </TabItem>
</Tabs>    