---
id: api-feature-render
title: render
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Purpose: Renders the configuration with resolved properties.

It takes the ctx and props

Returns: Rendered configurations.

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
    actual: renderFeature.render(),
    expect: [
        {
        kind: 'Service',
        metadata: {
            name: 'nginx-service',
        },
        },
    ],
    }

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    actual:
      - kind: Deployment
        metadata:
          name: nginx
    expect:
      - kind: Service
        metadata:
          name: nginx-service

    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
    "actual": [
        {
            "kind": "Deployment",
            "metadata": {
                "name": "nginx"
            }
        }
    ],
    "expect": [
        {
            "kind": "Service",
            "metadata": {
                "name": "nginx-service"
            }
        }
    ]
    }
    ```  
    </TabItem>
</Tabs>