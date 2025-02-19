---
id: api-feature-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `render` function renders the configurations with resolved properties and applies extensions to the configurations.
### Parameters
- **`ctx`** - (object) The context in which the configuration is being rendered.
- **`props`** - (object) The properties to resolve and apply to the configurations.

### Return Value
The rendered configurations with applied extensions, resolved properties, and final output ready for deployment.

## Usage Examples

<Tabs>
  <TabItem value="jsonnet" label="Jsonnet" default>
  ```js
  local config = import '../../vendor/konn/config.libsonnet';
  local feature = import '../../vendor/konn/feature.libsonnet';


  local renderFeature = feature.new(
    [
      {
        kind: 'Deployment',
        metadata: {
          name: 'nginx',
        },
      },
    ],
  );
  {
    output: renderFeature.render(),
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