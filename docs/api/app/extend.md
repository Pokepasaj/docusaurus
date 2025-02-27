---
id: api-app-extend
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
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Creates a new application definition by extending an existing one. It enables the addition of configurations, properties, profiles, and extensions while maintaining the original structure.

## Parameters
- **`features`** (`array`, `default` `[]`) - Additional features to be merged with the existing ones.
- **`props`** (`object`, `default` `{}`) - Additional properties to be included in the extended application.
- **`profiles`** (`object`, `default` `{}`) - Additional profiles that define different variations of the application.
- **`extensions`** (`array`, `default` `[]`) - Additional extensions that modify or enhance the application behavior.
- **`filter`** (`function`, `default` `true`) - A function that determines whether a configuration should be included in the final output.
- **`map`** (`function`, `default` `identity function`) - A function that modifies each configuration before rendering.

## Return Value
- Returns a new application manifest object that includes the extended properties, features, and configurations.

## Usage Examples

### Example 1
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new([
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
    ]);

    local extendedApp = myApp.extend([
      {
        kind: 'Deployment',
        metadata: {
          name: 'kong',
        },
      },
    ]);

    extendedApp.resolve()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - body:
        kind: Deployment
        metadata:
          name: nginx
    - body:
        kind: Deployment
        metadata:
          name: flask
    - body:
        kind: Deployment
        metadata:
          name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "nginx"
             }
          }
       },
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       },
       {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "kong"
             }
          }
       }
    ]
    ```  
  </TabItem>
</Tabs>

### Example 2
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local config = import '../../vendor/konn/config.libsonnet';

    local myApp = app.new([
      {
        kind: 'Service',
        metadata: {
          name: 'nginx-svc',
        },
      },
      {
        kind: 'Service',
        metadata: {
          name: 'flask-svc',
        },
      },
    ]).extend(
      [
        config.new(
          function(ctx, props) {
            kind: 'Service',
            metadata: {
              name: props.name,
            },
          },
        ),
      ],
      {
        name: 'kong-svc',
      }
    );

    myApp.resolve()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - body:
        kind: Service
        metadata:
          name: nginx-svc
    - body:
        kind: Service
        metadata:
          name: flask-svc
    - body:
        kind: Service
        metadata:
          name: kong-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "name": "nginx-svc"
             }
          }
       },
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "name": "flask-svc"
             }
          }
       },
       {
          "body": {
             "kind": "Service",
             "metadata": {
                "name": "kong-svc"
             }
          }
       }
    ]
    ```  
  </TabItem>
</Tabs>