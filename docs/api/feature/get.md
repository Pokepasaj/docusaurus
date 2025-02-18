---
id: api-feature-get
title: get
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `get` function retrieves a configuration by a specific path or matcher condition.
### Parameters
- **`path`** - (string) The path to search for in the configuration.
- **`matcher`** - (string) The value to match (default is an empty string).


### Return Value
The configuration matching the path or matcher.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

    local testFeature = feature.new(
    [{
        kind: 'Deployment',
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

    {
    output: testFeature.get('metadata.name', 'flask').render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
    kind: Deployment
    metadata:
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": {
        "kind": "Deployment",
        "metadata": {
            "name": "flask"
        }
    }
    }
    ```  
    </TabItem>
</Tabs>