---
id: api-app-filter
title: filter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `filter` function returns a new manifest containing only the configurations that match the specified filter condition.
### Parameters
- **`fn`** - (function) A function that determines whether a config should be included.
### Return Value
A filtered application manifest object, containing only the configurations that satisfy the provided filter function.
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
      filter=function(ctx, config, props) config.get('metadata').name == 'flask'
    );

    {
      filtered_output: myApp.render(),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    filtered_output:
      - kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "filtered_output": [
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
