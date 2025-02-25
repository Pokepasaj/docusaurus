---
id: api-app-find
title: find
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `find` function searches the manifest for the first configuration that matches a given condition.
### Parameters
- **`fn`** - (function) A function that returns `true` for the desired configuration.
### Return Value
The first matching configuration object if found, otherwise `null`.
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
      {
        kind: 'Service',
        metadata: {
          name: 'kong',
        },
      },
    ],
  );

  {
    found_config: myApp.find(
      function(ctx, config, props) config.get('kind') == 'Service'
    ).render(),
  }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    found_config:
      kind: Service
      metadata:
        name: kong
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "found_config": {
          "kind": "Service",
          "metadata": {
             "name": "kong"
          }
       }
    }
    ```  
    </TabItem>
</Tabs>
