---
id: api-feature-find
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

## Overview
The `find` function searches through the configurations and returns the first match based on a custom condition.

## Parameters
- **`fn`** - (function) The function that defines the condition to match configurations.

## Return Value
The first matching configuration found.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
      [{
        kind: 'Service',
        metadata: {
          name: 'nginx',
        },
      }, {
        kind: 'Deployment',
        metadata: {
          name: 'flask',
        },
      }]
    );

    // Using `find` to get the first Deployment
    {
      found_config: testFeature.find(
        function(ctx, config, props) config.get('kind') == 'Deployment'
      ).render(),
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

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
      [
        {
          kind: 'Service',
          metadata: {
            name: 'nginx',
            labels: {
              app: 'web',
            },
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'flask',
            labels: {
              app: 'api',
            },
          },
        },
        {
          kind: 'Service',
          metadata: {
            name: 'kong',
            labels: {
              app: 'api',
            },
          },
        },
      ]
    );

    // find will only take in account the first hit only
    {
      found_service: testFeature.find(function(ctx, config, props)
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