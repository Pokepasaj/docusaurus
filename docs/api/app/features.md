---
id: api-app-features
title: features
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `features`

## Table of Contents
- [`features`](#features)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Retrieves and filters the list of features defined in the application manifest.

## Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.

## Return Value
- Returns an array of features applied to the configurations.
## Usage Examples

### Example 1
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new(
      [
        function(ctx, props) {
          kind: 'Deployment',
          metadata: {
            name: props.name_nginx,
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: 'flask',
          },
        },
      ],
      {
        name_nginx: 'nginx',
      });
      
    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
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
       "body": [
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
    local app = import '../../vendor/konn/app.libsonnet';

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
    ]);

    myApp
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - kind: Service
        metadata:
          name: nginx-svc
      - kind: Service
        metadata:
          name: flask-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "kind": "Service",
             "metadata": {
                "name": "nginx-svc"
             }
          },
          {
             "kind": "Service",
             "metadata": {
                "name": "flask-svc"
             }
          }
       ]
    }
    ```  
  </TabItem>
</Tabs>