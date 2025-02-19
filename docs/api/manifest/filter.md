---
id: api-manifest-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `filter` function applies a custom filtering function to the manifest’s configurations. It returns a new manifest with the filter applied.

### Parameters
- **`fn`** -  (function): The filter function to apply. It takes `ctx`, `config`, and `props` as arguments and should return a boolean indicating whether to keep the config.

### Return Value
Returns a new manifest with the filter applied to its configurations.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(
    function(ctx, props) [{
        kind: 'Service', // Changing Service to Deployment will make filter this in account as well
        metadata: {
        name: 'nginx',
        },
    }, {
        kind: 'Deployment',
        metadata: {
        name: 'flask',
        },
    }],
    filter=function(ctx, cfg, props) cfg.is('Deployment')
    );
    {
    output: testManifest.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    output:
    - kind: Deployment
        metadata:
        name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": [
        {
            "kind": "Deployment",
            "metadata": {
                "name": "flask"
            }
        }
    ]
    }
    ```  
    </TabItem>
</Tabs>