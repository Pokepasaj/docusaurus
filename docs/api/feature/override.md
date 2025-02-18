---
id: api-feature-override
title: override
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The overrides function allows for overriding the properties or configurations of the feature with new values, applying these overrides when rendering or resolving the feature.
## Parameters
- **`props`** - (object or function) The properties or a function to override the existing properties.

## Return Value

The feature object with overridden properties.

### Usage Example


<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testFeature = feature.new([
    manifest.new(function(ctx, props) [{
        kind: 'Deployment',
        metadata: {
        name: props.name,
        labels: {
            label: props.label,
        },
        },
    }, 
    ], {
        name: 'placeholder', // commenting out the output props these props will be used instead
        label: 'placeholder',
    }),
    ]).override(function(props) {
    name: 'override-' + props.name,  // override passed props
    });

    {
    output: lib.render(testFeature, {
        name: 'nginx-deployment',  // this propr will be overidden
        label: 'nginx',  // this one wont be overidden (we did not specify it under override func)
    }),

    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
    - kind: Deployment
        metadata:
        labels:
            label: nginx
        name: override-nginx-deployment
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "output": [
        {
            "kind": "Deployment",
            "metadata": {
                "labels": {
                "label": "nginx"
                },
                "name": "override-nginx-deployment"
            }
        }
    ]
    }
    ```  
    </TabItem>
</Tabs>