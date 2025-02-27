---
id: api-manifest-kget
title: kget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `kget`

## Table of Contents
- [`kget`](#kget)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Parameters](#parameters)
    - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)
    - [Example 1](#example-1)
    - [Example 2](#example-2)

## Overview
The `kget` function searches for a configuration by its kind and metadata name. It allows querying configurations by their kind and name metadata.

### Parameters
- **`kind`** - (string) The kind of the configuration to search for.
- **`name`** - (string) The name of the configuration to search for.

### Return Value
Returns the configuration that matches the given kind and name.

## Usage Examples

:::note
Just like in [get](api-manifest-get) we get the first hit.

Also note instead of the path it's looking for kind.
:::

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [
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
          label: 'app1',
        },
      },
      {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
          label: 'app2',
        },
      },
      {
        kind: 'Service',
        metadata: {
          name: 'flask',
        },
      },
    ]);
    {
      output: testManifest.kget('Deployment', 'flask'),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      body:
        kind: Deployment
        metadata:
          label: app1
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "label": "app1",
                "name": "flask"
             }
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
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [
      {
        kind: 'Service',
        metadata: {
          name: 'nginx',
        },
      },
      {
        kind: 'Service',
        metadata: {
          name: 'flask',
          label: 'app1',
        },
      },
      {
        kind: 'Service',
        metadata: {
          name: 'flask',
          label: 'app2',
        },
      },
      {
        kind: 'Deployment',
        metadata: {
          name: 'flask-deployment',
        },
      },
    ]);
    {
      output: testManifest.kget('Service', 'flask'),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      body:
        kind: Service
        metadata:
          label: app1
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "body": {
             "kind": "Service",
             "metadata": {
                "label": "app1",
                "name": "flask"
             }
          }
       }
    }
    ```
  </TabItem>
</Tabs>