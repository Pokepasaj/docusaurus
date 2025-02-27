---
id: api-feature-map
title: map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# `map`

## Table of Contents
- [`map`](#map)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Parameters](#parameters)
  - [Return Value](#return-value)
  - [Usage Examples](#usage-examples)

## Overview
The `map` function allows for transforming the configurations of the feature by applying a custom map function.

## Parameters
- **`fn`** - (function) The map function that modifies the configurations.

## Return Value
The extended feature object with the map function applied to the configurations.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';


    local testFeature = feature.new(
      [
        manifest.new(
          function(ctx, props) [{
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'nginx',
              },
            },
          }, {
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'flask',
              },
            },
          }],
          {
            name: 'test',
          },
        ),
      ],
      map=function(ctx, config, props) config {
        metadata+: {
          name: props.name + '-app',  // adding -app to every props.name
        },
      }
    );
    {
      mapped_output: testFeature.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    mapped_output:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
          name: test-app
      - kind: Deployment
        metadata:
          labels:
            app: flask
          name: test-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "mapped_output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "nginx"
                },
                "name": "test-app"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask"
                },
                "name": "test-app"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new(
      [
        manifest.new(
          function(ctx, props) [{
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'nginx',
              },
            },
          }, {
            kind: 'Deployment',
            metadata: {
              name: props.name,
              labels: {
                app: 'flask',
              },
            },
          }],
          {
            name: 'test',
          },
        ),
      ],
      map=function(ctx, config, props) config {
        metadata+: {
          labels+: {
            version: 'v1.0',
          },
        },
      }
    );

    {
      mapped_output: testFeature.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    mapped_output:
      - kind: Deployment
        metadata:
          labels:
            app: nginx
            version: v1.0
          name: test
      - kind: Deployment
        metadata:
          labels:
            app: flask
            version: v1.0
          name: test
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "mapped_output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "nginx",
                   "version": "v1.0"
                },
                "name": "test"
             }
          },
          {
             "kind": "Deployment",
             "metadata": {
                "labels": {
                   "app": "flask",
                   "version": "v1.0"
                },
                "name": "test"
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>