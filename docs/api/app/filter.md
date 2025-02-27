---
id: api-app-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `filter`

## Table of Contents
- [`filter`](#filter)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Returns a new manifest containing only the configurations that match the specified filter condition.

## Parameters
- **`fn`** - (function) A function that determines whether a config should be included.

## Return Value
- Returns a filtered application manifest object, containing only the configurations that satisfy the provided filter function.

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
      ],
      filter=function(ctx, config, props) config.get('metadata').name == 'flask'
    );

    myApp.render()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Deployment
      metadata:
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "name": "flask"
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
      ],
      filter=function(ctx, config, props) config.get('metadata').name == 'nginx-svc'
    );

      myApp.render()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Service
      metadata:
        name: nginx-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Service",
          "metadata": {
             "name": "nginx-svc"
          }
       }
    ]
    ```  
  </TabItem>
</Tabs>