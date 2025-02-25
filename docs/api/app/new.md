---
id: api-app-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `new` function initializes a new application manifest with a set of configurations, properties, and extensions. It also enables filtering and mapping to customize the configuration dynamically.
### Parameters
- **`features`** - (array) A list of Kubernetes objects or functions that generate them.
- **`props`** - (object)  A set of properties that define application behavior.
- **`profiles`** - (object) Named sets of default property values.
- **`extensions`** - (array) A list of functions that modify configurations.
- **`filter`** - (function) A function to determine if a config should be included.
- **`map`** - (function) A function to transform configs before rendering.
### Return Value
An object representing the new application manifest, including its body (rendered configuration), resolved configurations (`configs`), profiles, features, extensions, and function arguments.
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
      ],
    );

    {
      output: myApp.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      - kind: Deployment
        metadata:
          name: nginx
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
      "output": [
          {
            "kind": "Deployment",
            "metadata": {
                "name": "nginx"
            }
          }
      ]
    }
    ```  
    </TabItem>
</Tabs>
