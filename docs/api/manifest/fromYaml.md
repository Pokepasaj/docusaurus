---
id: api-manifest-fromYaml
title: fromYaml
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `fromYaml` function creates a manifest from a YAML string or array of YAML strings. It parses the YAML and generates configurations based on it.

### Parameters
- **`yaml`** - (string | array) The YAML source to create the manifest from.
- **`props`** - (object) The properties to apply to the manifest.
- **`filter`** - (function) The filter function applied to the generated configurations.
- **`map`** - (function) The map function applied to the generated configurations.
### Return Value
Returns a new manifest object created from the YAML source.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn//manifest.libsonnet';

    manifest.fromYaml('{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}', {
      name: 'nginx',
    })
    ``` 
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    body:
      - apiVersion: v1
        kind: Pod
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "body": [
          {
             "apiVersion": "v1",
             "kind": "Pod",
             "metadata": {
                "name": "nginx"
             }
          }
       ]
    }
    ```
  </TabItem>
</Tabs>

