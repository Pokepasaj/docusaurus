---
id: api-app-extensions
title: extensions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
The `extensions` function retrieves all extensions associated with the application, including those defined in features.
### Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.
### Return Value
An array of extensions applied to the configurations. Extensions modify or extend the behavior of the manifest.
## Usage Examples

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local extension = import '../../vendor/konn/extension.libsonnet';

    local addLabelsAndReplicas = extension.new(
      function(ctx, target, props) target {
        metadata+: {
          labels: props.labels,
        },
        spec+: {
          replicas: props.replicas,
        },
      },
      {
        labels: 'default-label',  // default props
        replicas: 1,
      }
    );

    local myApp = app.new(
      features=[
        {
          kind: 'Deployment',
          metadata: {
            name: 'nginx',
          },
        },
      ],
      extensions=[addLabelsAndReplicas],
      props={
        labels: 'custom-label',  
        replicas: 2,  
      }
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
          labels: custom-label
          name: nginx
        spec:
          replicas: 2
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    {
       "output": [
          {
             "kind": "Deployment",
             "metadata": {
                "labels": "custom-label",
                "name": "nginx"
             },
             "spec": {
                "replicas": 2
             }
          }
       ]
    }
    ```  
    </TabItem>
</Tabs>
