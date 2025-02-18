---
id: api-feature-resolve
title: resolve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Got to come up with explanation this is a placeholder

<Tabs>
    <TabItem value="jsonnet" label="Jsonnet" default>
    ```js
    local feature = import '../../vendor/konn/feature.libsonnet';

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
    resolve: testFeature.resolve()
    }

    ```
  </TabItem>
  <TabItem value="yaml" label="YAML Output">

    ```yaml
    resolve:
      - body:
          kind: Namespace
          metadata:
            name: foo
          type: config1
      - body:
          kind: Namespace2
          metadata:
            name: bar
          type: config2

    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
    "resolve": [
        {
            "body": {
                "kind": "Namespace",
                "metadata": {
                "name": "foo"
                },
                "type": "config1"
            }
        },
        {
            "body": {
                "kind": "Namespace2",
                "metadata": {
                "name": "bar"
                },
                "type": "config2"
            }
        }
    ]
    }

    ```  
    </TabItem>
</Tabs>