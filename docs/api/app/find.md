---
id: api-app-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `find`

## Table of Contents
- [`find`](#find)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Searches the manifest for the first configuration that matches a given condition.

## Parameters
- **`fn`** - (function) A function that returns `true` for the desired configuration.

## Return Value
- Returns the first matching configuration object if found, otherwise `null`.

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
        kind: 'Service',
        metadata: {
          name: 'kong',
        },
      },
    ]);

    myApp.find(
      function(ctx, config, props) config.get('kind') == 'Service').render()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    kind: Service
    metadata:
      name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Service",
       "metadata": {
          "name": "kong"
       }
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
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
    );

    myApp.find(function(ctx, config, props) config.get('kind') == 'Deployment').render()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    kind: Deployment
    metadata:
      name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "kind": "Deployment",
       "metadata": {
          "name": "nginx"
       }
    }
    ```  
  </TabItem>
</Tabs>