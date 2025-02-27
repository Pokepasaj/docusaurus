---
id: api-manifest-find
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
The `find` function searches for configurations in the manifest that match the provided filter function. It returns the first matching configuration.

### Parameters
- **`fn`** -  (function):  A function to filter the configurations. It takes `ctx`, `config`, and `props` as arguments and should return a boolean indicating whether the configuration matches.

### Return Value
Returns the first configuration that matches the filter criteria.

## Usage Examples

:::note
Unlike the [find used in the feature API](/api/feature/api-feature-find) we need to wrap our testManifest in a function.
:::

### Example 1
<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
      function(ctx, props) [{ // this is the difference between feature find and manifest find
        kind: 'Service',
        metadata: {
          name: 'nginx',
        },
      }, {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      }],
    );
    {
      found_config: testManifest.find(function(ctx, config, props)
        config.get('kind') == 'Deployment').render(),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    found_config:
      kind: Deployment
      metadata:
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "found_config": {
          "kind": "Deployment",
          "metadata": {
             "name": "flask"
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

    local testManifest = manifest.new(
      function(ctx, props) [{
        kind: 'Service',
        metadata: {
          name: 'nginx',
          labels: {
            app: 'web',
          },
        },
      }, {
        kind: 'Service',
        metadata: {
          name: 'flask',
          labels: {
            app: 'api',
          },
        },
      }, {
        kind: 'Service',
        metadata: {
          name: 'kong',
          labels: {
            app: 'api',
          },
        }],
    );

    {
      found_service: testManifest.find(function(ctx, config, props)
        config.get('metadata.labels.app') == 'api').render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    found_service:
      kind: Service
      metadata:
        labels:
          app: api
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "found_service": {
          "kind": "Service",
          "metadata": {
             "labels": {
                "app": "api"
             },
             "name": "flask"
          }
       }
    }
    ```
  </TabItem>
</Tabs>