---
id: api-app-kget
title: kget
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `kget` function searches for a Kubernetes resource in the manifest based on its kind and metadata name.
### Parameters
- **`kind`** - (string)  The Kubernetes resource type (e.g., `Deployment`).
- **`name`** - (string) The metadata name of the resource.
### Return Value
The first configuration object that matches the specified kind and name, or `null` if not found.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

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
      output: myApp.kget('Deployment', 'flask'),
    }
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    output:
      body:
        kind: Deployment
        metadata:
          name: flask
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": {
          "body": {
             "kind": "Deployment",
             "metadata": {
                "name": "flask"
             }
          }
       }
    }
    ```  
    </TabItem>
</Tabs>
