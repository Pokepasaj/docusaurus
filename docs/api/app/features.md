---
id: api-app-features
title: features
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';



## Overview
Retrieves and filters the list of features defined in the application manifest.

## Parameters
- **`ctx`** - (object) The application context.
- **`props`** - (object) Additional properties to apply.

## Return Value
- Returns an array of features applied to the configurations.
## Usage Examples

### Example 1
<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local app = import '../../vendor/konn/app.libsonnet';
    local feature = import '../../vendor/konn/feature.libsonnet';

    local myApp = app.new(
      features=[
        feature.new([
          function(ctx, props) {
            kind: 'Deployment',
            metadata: {
              name: props.name,
            },
            spec: {
              replicas: props.replicas,
              template: {
                spec: {
                  containers: [{
                    name: props.name,
                    image: 'nginx:1.14.2',
                  }],
                },
              },
            },
          },
          function(ctx, props) {
            kind: 'Service',
            metadata: {
              name: props.name,
            },
            spec: {
              selector: {
                app: props.name,
              },
              ports: [
                {
                  port: 80,
                  targetPort: 80,
                },
              ],
            },
          },
        ]),
      ],
      props={
        name: 'example-app',
        replicas: 3,
      }
    );

    myApp.render()
    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">
    ```yaml
    - kind: Deployment
      metadata:
        name: example-app
      spec:
        replicas: 3
        template:
          spec:
            containers:
              - image: nginx:1.14.2
                name: example-app
    - kind: Service
      metadata:
        name: example-app
      spec:
        ports:
          - port: 80
            targetPort: 80
        selector:
          app: example-app
    ```
  </TabItem>
  <TabItem value="json" label="JSON Output">
    ```json
    [
       {
          "kind": "Deployment",
          "metadata": {
             "name": "example-app"
          },
          "spec": {
             "replicas": 3,
             "template": {
                "spec": {
                   "containers": [
                      {
                         "image": "nginx:1.14.2",
                         "name": "example-app"
                      }
                   ]
                }
             }
          }
       },
       {
          "kind": "Service",
          "metadata": {
             "name": "example-app"
          },
          "spec": {
             "ports": [
                {
                   "port": 80,
                   "targetPort": 80
                }
             ],
             "selector": {
                "app": "example-app"
             }
          }
       }
    ]
    ```  
  </TabItem>
</Tabs>

