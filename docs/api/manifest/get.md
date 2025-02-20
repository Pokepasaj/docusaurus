---
id: api-manifest-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `get` function retrieves a specific configuration from the manifest by matching a given path and matcher. It allows querying configurations by their structure.

### Parameters
- **`path`** - (string) The path of the configuration to retrieve.
- **`matcher`** - (string | function) The value or function used to match the configuration.

### Return Value
Returns the configuration that matches the provided path and matcher.

## Usage Examples

:::note
you only get the first hit with get if we comment out or remove Deployment with flask as name it will render Service with flask
:::

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn//manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
      kind: 'Deployment',
      metadata: {
        name: 'nginx',
      },
    }, {
      kind: 'Deployment',
      metadata: {
        name: 'flask',
      },
    }, {
      kind: 'Service',
      metadata: {
        name: 'flask',
      },
    }]);
    {
      output: testManifest.get('metadata.name', 'flask'),
    }
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
      body:
        kind: Deployment
        metadata:
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
                "name": "flask"
             }
          }
       }
    }
    ```
  </TabItem>
</Tabs>

