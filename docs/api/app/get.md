---
id: api-app-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `get`

## Table of Contents
- [`get`](#get)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
Retrieves a specific configuration by matching a given JSON path and value within the manifest.

## Parameters
- **`path`** - (string) The JSON path to search within each configuration.
- **`matcher`** - (string) The expected value at the specified path.

## Return Value
- Returns the first configuration object where the specified path matches the given value, or `null` if not found.

## Usage Examples

### Example 1
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

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

    myApp.get('metadata.name', 'nginx')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Deployment
      metadata:
        name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Deployment",
          "metadata": {
             "name": "nginx"
          }
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
    local feature = import '../../vendor/konn/feature.libsonnet';

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

    myApp.get('metadata.name', 'flask-svc')
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      kind: Service
      metadata:
        name: flask-svc
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": {
          "kind": "Service",
          "metadata": {
             "name": "flask-svc"
          }
       }
    }
    ```  
  </TabItem>
</Tabs>