---
id: api-manifest-configure
title: configure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview
The `configure` function is an alias for the override function. It provides an alternative method to apply property overrides to the manifest.

### Parameters
- **`propsOrFunction`** - (`function` | `object`): A function or object that overrides the original properties.


### Return Value
Returns the properties after applying the overrides.

## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local lib = import '../../vendor/konn/helpers.libsonnet';
    local context = import '../../vendor/konn/manifest.libsonnet';
    local manifest = import '../../vendor/konn/manifest.libsonnet';

    local testManifest = manifest.new(function(ctx, props) [{
    kind: 'Deployment',
    metadata: {
        name: props.name_nginx,
        labels: {
        label: props.label,
        app: 'nginx',
        },
    },
    }, {
    kind: 'Deployment',
    metadata: {
        name: props.name_flask,
        labels: {
        label: props.label,
        app: 'flask',
        },
    },
    }], {
    name: 'placeholder',
    label: 'placeholder',
    }).configure(function(props){
        name_nginx:  props.name_nginx + '-app',  // override passed props
        name_flask:  props.name_flask + '-app',  

    });

    {
    Output: lib.render(testManifest, {
        name_nginx: 'nginx',  // this propr will be overidden
        name_flask: 'flask',
        label: 'nginx',  // this one wont be overidden (we did not specify it under override func)
    }),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    Output:
    - kind: Deployment
        metadata:
        labels:
            app: nginx
            label: nginx
        name: nginx-app
    - kind: Deployment
        metadata:
        labels:
            app: flask
            label: nginx
        name: flask-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
    "Output": [
        {
            "kind": "Deployment",
            "metadata": {
                "labels": {
                "app": "nginx",
                "label": "nginx"
                },
                "name": "nginx-app"
            }
        },
        {
            "kind": "Deployment",
            "metadata": {
                "labels": {
                "app": "flask",
                "label": "nginx"
                },
                "name": "flask-app"
            }
        }
    ]
    }
    ```  
    </TabItem>
</Tabs>