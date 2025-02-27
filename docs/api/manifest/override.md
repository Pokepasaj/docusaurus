---
id: api-manifest-override
title: override
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `override`

## Table of Contents
- [`override`](#override)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `override` function applies custom overrides to the manifest’s properties. It supersedes the original properties with the new ones provided in the argument, either as a function or object.

### Parameters
- **`propsOrFunction`** - (function | object): A function or object that overrides the original properties.

### Return Value
Returns the updated manifest with the applied overrides.

## Usage Examples

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Deployment',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'nginx',
        },
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'flask',
        },
      },
    }], {
      name: 'placeholder',  // if we comment out the output props, these props will be used instead
      label: 'placeholder',
    }).override(function(props) {
      name: props.name + '-app',  // override passed props
    });

    {
      Output: lib.render(testManifest, {
        name: 'nginx-deployment',  // this prop will be overridden
        label: 'nginx',  // this one won't be overridden (we did not specify it under override func)
      }),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    Output:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
            label: nginx
          name: nginx-deployment-app
      - kind: Deployment
        metadata:
          labels:
            app: flask
            label: nginx
          name: nginx-deployment-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "Output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "nginx",
                   "label": "nginx"
                },
                "name": "nginx-deployment-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask",
                   "label": "nginx"
                },
                "name": "nginx-deployment-app"
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
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Service',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'nginx',
        },
      },
    }, {
      kind: 'Service',
      metadata: {
        name: props.name,
        labels: {
          label: props.label,
          app: 'flask',
        },
      },
    }], {
      name: 'placeholder',  // if we comment out the output props, these props will be used instead
      label: 'placeholder',
    }).override(function(props) {
      name: props.name + '-svc',  // override passed props
    });

    {
      Output: lib.render(testManifest, {
        name: 'nginx-service',  // this prop will be overridden
        label: 'nginx',  // this one won't be overridden (we did not specify it under override func)
      }),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    Output:
      - kind: Service
        metadata:
          labels:
            app: nginx
            label: nginx
          name: nginx-service-svc
      - kind: Service
        metadata:
          labels:
            app: flask
            label: nginx
          name: nginx-service-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "Output": [
          {
             "kind": "Service",
             "metadata": {
                "labels": {
                   "app": "nginx",
                   "label": "nginx"
                },
                "name": "nginx-service-svc"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "labels": {
                   "app": "flask",
                   "label": "nginx"
                },
                "name": "nginx-service-svc"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>