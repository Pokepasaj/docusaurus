---
id: api-app-extend
title: extend
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

The `extend` function in `app` allows you to create a new application definition by extending an existing one. It enables the addition of configurations, properties, profiles, and extensions while maintaining the original structure. This is useful for modifying or building upon an existing application manifest.

### Parameters

- **`configs`** (`array`, `default` `[]`) - Additional configurations to be merged with the existing ones.
- **`props`** (`object`, `default` `{}`) - Additional properties to be included in the extended application.
- **`profiles`** (`object`, `default` `{}`) - Additional profiles that define different variations of the application.
- **`extensions`** (`array`, `default` `[]`) - Additional extensions that modify or enhance the application behavior.
- **`filter`** (`function`, `default` `true`) - A function that determines whether a configuration should be included in the final output.
- **`map`** (`function`, `default`: `identity function`) - A function that modifies each configuration before rendering.


## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';

    local myApp = app.new(
      features=[
        function(ctx, props) {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
        {
          kind: 'Deployment',
          metadata: {
            name: 'flask',
          },
        },
      ],
    );

    {
      output: myApp.resolve(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - body:
          kind: Deployment
          metadata:
            name: nginx
      - body:
          kind: Deployment
          metadata:
            name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "nginx"
                }
             }
          },
          {
             "body": {
                "kind": "Deployment",
                "metadata": {
                   "name": "flask"
                }
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>
