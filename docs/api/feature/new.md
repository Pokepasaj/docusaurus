---
id: api-feature-new
title: new
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The new function initializes a new feature with configurations, properties, and extensions.

It can also apply map and filters(that`s the only difference between a feature and a manifest)

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js

    local feature = import '../../vendor/konn/feature.libsonnet'; // import feature
    local helper = import '../../vendor/konn/helpers.libsonnet'; // import helpers to render this 

    local testFeature = feature.new(
    [
    {
        type: 'config1',
        kind: 'Namespace',
        metadata: {
        name: 'foo',
        },
    },
    {
        type: 'config2',
        kind: 'Namespace2',
        metadata: {
        name: 'bar',
        },
    },
    ],
    
    );

    {
    rendered: helper.render(testFeature), // feature does not have a render function we use helpers to render
    }

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    rendered:
    - kind: Namespace
        metadata:
          name: foo
        type: config1
    - kind: Namespace2
        metadata:
          name: bar
        type: config2

    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
    "rendered": [
      {
            "kind": "Namespace",
            "metadata": {
                "name": "foo"
         },
           "type": "config1"
      },
      {
            "kind": "Namespace2",
            "metadata": {
                "name": "bar"
         },
            "type": "config2"
        }
      ]
    }
    ```  
    </TabItem>
</Tabs>